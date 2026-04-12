let emojiRules = [];
let sites = [];

// 🔹 MAIN FUNCTION
function processPage() {
    chrome.storage.sync.get(["emojiRules", "sites"], (data) => {
        emojiRules = data.emojiRules || [];
        sites = data.sites || [];

        const currentSite = window.location.hostname;

        const isAllowed = sites.some(site => currentSite.includes(site));

        if (sites.length > 0 && !isAllowed) {
            return;
        }

        walk(document.body);
    });
}

// 🔹 WALK FUNCTION
function walk(node) {
    // ❌ Ignore typing areas
    if (
        node.closest &&
        (node.closest("input") ||
            node.closest("textarea") ||
            node.closest("[contenteditable='true']"))
    ) {
        return;
    }

    // ❌ Ignore scripts/styles
    if (
        node.nodeName === "SCRIPT" ||
        node.nodeName === "STYLE" ||
        node.nodeName === "NOSCRIPT"
    ) {
        return;
    }

    // ✅ TEXT NODES
    if (node.nodeType === 3) {
        if (!node.nodeValue || !node.nodeValue.trim()) return;

        let text = node.nodeValue;

        emojiRules.forEach(rule => {
            text = text.replaceAll(rule.from, rule.to);
        });

        if (text !== node.nodeValue) {
            node.nodeValue = text;
        }
    } else {
        node.childNodes.forEach(child => walk(child));
    }
}

// 🔹 OBSERVER
function startObserver() {
    processPage();

    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                walk(node);
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// 🚀 START
startObserver();