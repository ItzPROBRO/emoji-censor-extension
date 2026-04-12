const hideInput = document.getElementById("hideInput");
const addHide = document.getElementById("addHide");

const siteInput = document.getElementById("siteInput");
const addSite = document.getElementById("addSite");

const hideListDisplay = document.getElementById("hideListDisplay");
const siteListDisplay = document.getElementById("siteListDisplay");

// 🔹 LOAD + DISPLAY DATA
function loadData() {
    chrome.storage.sync.get(["emojiRules", "sites"], (data) => {
        displayRules(data.emojiRules || []);
        displaySites(data.sites || []);
    });
}

// 🔹 DISPLAY RULES (merged system)
function displayRules(list) {
    hideListDisplay.innerHTML = "";

    list.forEach((rule, index) => {
        const li = document.createElement("li");

        li.textContent = rule.from + " → " + rule.to;

        const btn = document.createElement("button");
        btn.innerHTML = "&times;";

        btn.onclick = () => {
            list.splice(index, 1);
            chrome.storage.sync.set({ emojiRules: list }, loadData);
        };

        li.appendChild(btn);
        hideListDisplay.appendChild(li);
    });
}

// 🔹 DISPLAY SITES (same as before)
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

// 🔹 ADD RULE (replaces BOTH hide + replace)
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

        list.push({
            from: emoji,
            to: "⬛" // default = remove
        });

        chrome.storage.sync.set({ emojiRules: list }, loadData);
        hideInput.value = "";
    });
};

// 🔹 ADD SITE (same)
addSite.onclick = () => {
    const site = siteInput.value;

    chrome.storage.sync.get(["sites"], (data) => {
        const list = data.sites || [];
        list.push(site);

        chrome.storage.sync.set({ sites: list }, loadData);
        siteInput.value = "";
    });
};

// 🔹 CLEAR ALL (still useful for dev)
document.getElementById("clearAll").onclick = () => {
    chrome.storage.sync.clear(() => {
        loadData();
    });
};

// 🚀 INITIAL LOAD
loadData();