const loadForeground = (tab) => {
  chrome.tabs.get(tab.tabId, current_tab_info => {
    if (/^https:\/\/meet\.google/.test(current_tab_info.url)) {
      chrome.scripting.executeScript(
        {
          file: './foreground.js'
        }
      );
    }
  })
}

chrome.tabs.onActivated.addListener(loadForeground);
