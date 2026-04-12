const hideInput = document.getElementById("hideInput");
const addHide = document.getElementById("addHide");

const fromEmoji = document.getElementById("fromEmoji");
const toEmoji = document.getElementById("toEmoji");
const addReplace = document.getElementById("addReplace");

const siteInput = document.getElementById("siteInput");
const addSite = document.getElementById("addSite");

const hideListDisplay = document.getElementById("hideListDisplay");
const replaceListDisplay = document.getElementById("replaceListDisplay");
const siteListDisplay = document.getElementById("siteListDisplay");

// 🔹 LOAD + DISPLAY DATA
function loadData() {
    chrome.storage.sync.get(["hideList", "replaceList", "sites"], (data) => {
        displayHideList(data.hideList || []);
        displayReplaceList(data.replaceList || []);
        displaySites(data.sites || []);
    });
}

// 🔹 DISPLAY HIDE LIST
function displayHideList(list) {
    hideListDisplay.innerHTML = "";

    list.forEach((emoji, index) => {
        const li = document.createElement("li");
        li.textContent = emoji;

        const btn = document.createElement("button");
        btn.innerHTML = "&times;";
        btn.onclick = () => {
            list.splice(index, 1);
            chrome.storage.sync.set({ hideList: list }, loadData);
        };

        li.appendChild(btn);
        hideListDisplay.appendChild(li);
    });
}

// 🔹 DISPLAY REPLACE LIST
function displayReplaceList(list) {
    replaceListDisplay.innerHTML = "";

    list.forEach((rule, index) => {
        const li = document.createElement("li");
        li.textContent = `${rule.from} → ${rule.to}`;

        const btn = document.createElement("button");
        btn.innerHTML = "&times;";
        btn.onclick = () => {
            list.splice(index, 1);
            chrome.storage.sync.set({ replaceList: list }, loadData);
        };

        li.appendChild(btn);
        replaceListDisplay.appendChild(li);
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

// 🔹 ADD HIDE
addHide.onclick = () => {
    const emoji = hideInput.value;

    chrome.storage.sync.get(["hideList"], (data) => {
        const list = data.hideList || [];
        if (list.includes(emoji)) {
            alert("Emoji already added!");
            return;
        }

        list.push(emoji);

        chrome.storage.sync.set({ hideList: list }, loadData);
        hideInput.value = "";
    });
};

// 🔹 ADD REPLACE
addReplace.onclick = () => {
    const from = fromEmoji.value;
    const to = toEmoji.value;

    chrome.storage.sync.get(["replaceList"], (data) => {
        const list = data.replaceList || [];
        const exists = list.some(rule => rule.from === from && rule.to === to);

        if (exists) {
            alert("This replace rule already exists!");
            return;
        }

        list.push({ from, to });

        chrome.storage.sync.set({ replaceList: list }, loadData);
        fromEmoji.value = "";
        toEmoji.value = "";
    });
};

// 🔹 ADD SITE
addSite.onclick = () => {
    const site = siteInput.value;

    chrome.storage.sync.get(["sites"], (data) => {
        const list = data.sites || [];
        list.push(site);

        chrome.storage.sync.set({ sites: list }, loadData);
        siteInput.value = "";
    });
};

// 🚀 INITIAL LOAD
loadData();


document.getElementById("clearAll").onclick = () => {
    chrome.storage.sync.clear(() => {
        loadData();
    });
};