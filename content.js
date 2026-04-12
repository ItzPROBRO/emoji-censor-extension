let hideList = [];
let replaceList = [];
let sites = [];

// 🔹 MAIN FUNCTION
function processPage() {
    chrome.storage.sync.get(["hideList", "replaceList", "sites"], (data) => {
        hideList = data.hideList || [];
        replaceList = data.replaceList || [];
        sites = data.sites || [];

        const currentSite = window.location.hostname;

        const isAllowed = sites.some(site => currentSite.includes(site));

        if (sites.length > 0 && !isAllowed) {
            return;
        }

        walk(document.body);
    });
}

// 🔹 WALK FUNCTION (moved OUTSIDE)
function walk(node) {
    // ❌ Ignore typing areas (VERY IMPORTANT)
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

    // ✅ Text node
    if (node.nodeType === 3) {
        if (!node.nodeValue || !node.nodeValue.trim()) return;

        let text = node.nodeValue;

        hideList.forEach(e => {
            text = text.replaceAll(e, "");
        });

        replaceList.forEach(rule => {
            text = text.replaceAll(rule.from, rule.to);
        });

        if (text !== node.nodeValue) {
            node.nodeValue = text;
        }
    } else {
        node.childNodes.forEach(child => walk(child));
    }
}

// 🔹 SMART OBSERVER (optimized)
function startObserver() {
    processPage(); // initial run

    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                walk(node); // ✅ only process new nodes
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