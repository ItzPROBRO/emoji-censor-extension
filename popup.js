const hideInput = document.getElementById("hideInput");
const addHide = document.getElementById("addHide");

const siteInput = document.getElementById("siteInput");
const addSite = document.getElementById("addSite");

const hideListDisplay = document.getElementById("hideListDisplay");
const siteListDisplay = document.getElementById("siteListDisplay");
const statsLabel = document.getElementById("statsLabel");

// 🔹 LOAD + DISPLAY DATA
function loadData() {
    chrome.storage.sync.get(["emojiRules", "sites"], (data) => {
        const rules = data.emojiRules || [];
        const sites = data.sites || [];
        displayRules(rules);
        displaySites(sites);
        statsLabel.textContent = `${rules.length} rule${rules.length !== 1 ? "s" : ""} · ${sites.length} site${sites.length !== 1 ? "s" : ""}`;
    });
}

// 🔹 DISPLAY RULES
function displayRules(list) {
    hideListDisplay.innerHTML = "";

    list.forEach((rule, index) => {
        const li = document.createElement("li");

        const fromBox = document.createElement("div");
        fromBox.className = "rule-from";
        fromBox.textContent = rule.from;

        const arrow = document.createElement("div");
        arrow.className = "rule-arrow";
        arrow.textContent = "→";

        const toBox = document.createElement("div");
        toBox.className = "rule-to";
        toBox.textContent = rule.to;
        toBox.title = "click to change replacement";

        const hint = document.createElement("div");
        hint.className = "rule-hint";
        hint.textContent = "tap to edit";

        const btn = document.createElement("button");
        btn.innerHTML = "&times;";
        btn.title = "Remove rule";
        btn.onclick = () => {
            list.splice(index, 1);
            chrome.storage.sync.set({ emojiRules: list }, loadData);
        };

        li.appendChild(fromBox);
        li.appendChild(arrow);
        li.appendChild(toBox);
        li.appendChild(hint);
        li.appendChild(btn);
        hideListDisplay.appendChild(li);
    });
}

// 🔹 DISPLAY SITES
function displaySites(list) {
    siteListDisplay.innerHTML = "";

    list.forEach((site, index) => {
        const li = document.createElement("li");
        li.textContent = site;

        const btn = document.createElement("button");
        btn.innerHTML = "&times;";
        btn.onclick = () => {
            list.splice(index, 1);
            chrome.storage.sync.set({ sites: list }, loadData);
        };

        li.appendChild(btn);
        siteListDisplay.appendChild(li);
    });
}

// 🔹 ADD RULE
addHide.onclick = () => {
    const emoji = hideInput.value.trim();
    if (!emoji) return;

    chrome.storage.sync.get(["emojiRules"], (data) => {
        const list = data.emojiRules || [];
        const exists = list.some(rule => rule.from === emoji);

        if (exists) {
            alert("Emoji already exists!");
            return;
        }

        list.push({ from: emoji, to: "⬛" });
        chrome.storage.sync.set({ emojiRules: list }, loadData);
        hideInput.value = "";
    });
};

// 🔹 ADD SITE
addSite.onclick = () => {
    const site = siteInput.value.trim();
    if (!site) return;

    chrome.storage.sync.get(["sites"], (data) => {
        const list = data.sites || [];
        list.push(site);
        chrome.storage.sync.set({ sites: list }, loadData);
        siteInput.value = "";
    });
};

// 🔹 CLEAR ALL
document.getElementById("clearAll").onclick = () => {
    chrome.storage.sync.clear(() => {
        loadData();
    });
};

// 🚀 INITIAL LOAD
loadData();