
chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.create({
        url: "https://cataas.com/cat"
    })
});

