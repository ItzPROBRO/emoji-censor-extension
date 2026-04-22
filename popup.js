// ═══════════════════════════════════════
//  EMOJI DATA
// ═══════════════════════════════════════
const EMOJI_CATEGORIES = [
  { icon: "😀", label: "Smileys", emojis: ["😀","😃","😄","😁","😆","😅","🤣","😂","🙂","🙃","😉","😊","😇","🥰","😍","🤩","😘","😗","😚","😙","🥲","😋","😛","😜","🤪","😝","🤑","🤗","🤭","🤫","🤔","🤐","🤨","😐","😑","😶","😏","😒","🙄","😬","🤥","😌","😔","😪","🤤","😴","😷","🤒","🤕","🤢","🤮","🤧","🥵","🥶","🥴","😵","🤯","🤠","🥳","🥸","😎","🤓","🧐","😕","😟","🙁","☹️","😮","😯","😲","😳","🥺","😦","😧","😨","😰","😥","😢","😭","😱","😖","😣","😞","😓","😩","😫","🥱","😤","😡","😠","🤬","😈","👿","💀","☠️","💩","🤡","👹","👺","👻","👽","👾","🤖"] },
  { icon: "👋", label: "People", emojis: ["👋","🤚","🖐️","✋","🖖","👌","🤌","🤏","✌️","🤞","🤟","🤘","🤙","👈","👉","👆","🖕","👇","☝️","👍","👎","✊","👊","🤛","🤜","👏","🙌","👐","🤲","🤝","🙏","✍️","💅","🤳","💪","🦾","🦿","🦵","🦶","👂","🦻","👃","🫀","🫁","🧠","🦷","🦴","👀","👁️","👅","👄","💋","🩸"] },
  { icon: "🐶", label: "Animals", emojis: ["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐻‍❄️","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🙈","🙉","🙊","🐔","🐧","🐦","🐤","🦆","🦅","🦉","🦇","🐺","🐗","🐴","🦄","🐝","🐛","🦋","🐌","🐞","🐜","🦟","🦗","🕷️","🦂","🐢","🐍","🦎","🦖","🦕","🐙","🦑","🦐","🦞","🦀","🐡","🐠","🐟","🐬","🐳","🐋","🦈","🐊","🐅","🐆","🦓","🦍","🦧","🦣","🐘","🦛","🦏","🐪","🐫","🦒","🦘","🦬","🐃","🐂","🐄","🐎","🐖","🐏","🐑","🦙","🐐","🦌","🐕","🐩","🦮","🐕‍🦺","🐈","🐈‍⬛","🐓","🦃","🦤","🦚","🦜","🦢","🦩","🕊️","🐇","🦝","🦨","🦡","🦫","🦦","🦥","🐁","🐀","🐿️","🦔"] },
  { icon: "🌸", label: "Nature", emojis: ["🌸","🌼","🌻","🌹","🥀","🌺","🌷","🌱","🌲","🌳","🌴","🌵","🌾","🍀","🍁","🍂","🍃","🍄","🌾","💐","🍇","🍈","🍉","🍊","🍋","🍌","🍍","🥭","🍎","🍏","🍐","🍑","🍒","🍓","🫐","🥝","🍅","🫒","🥥","🥑","🍆","🥔","🥕","🌽","🌶️","🫑","🥒","🥬","🥦","🧄","🧅","🍠","🥜","🫘","🌰"] },
  { icon: "🍕", label: "Food", emojis: ["🍕","🍔","🌮","🌯","🫔","🥙","🧆","🥚","🍳","🥘","🍲","🫕","🥣","🥗","🍿","🧂","🥫","🍱","🍘","🍙","🍚","🍛","🍜","🍝","🍠","🍢","🍣","🍤","🍥","🥮","🍡","🥟","🥠","🥡","🦀","🦞","🦐","🦑","🦪","🍦","🍧","🍨","🍩","🍪","🎂","🍰","🧁","🥧","🍫","🍬","🍭","🍮","🍯","🍼","🥛","☕","🫖","🍵","🍶","🍾","🍷","🍸","🍹","🍺","🍻","🥂","🥃","🫗","🥤","🧋","🧃","🧉","🧊"] },
  { icon: "⚽", label: "Activity", emojis: ["⚽","🏀","🏈","⚾","🥎","🎾","🏐","🏉","🥏","🎱","🏓","🏸","🏒","🏑","🥍","🏏","🪃","🥅","⛳","🪁","🏹","🎣","🤿","🥊","🥋","🎽","🛹","🛼","🛷","⛸️","🥌","🎿","⛷️","🏂","🪂","🏋️","🤼","🤸","⛹️","🤺","🏇","🧘","🏄","🏊","🤽","🚣","🧗","🚵","🚴","🏆","🥇","🥈","🥉","🏅","🎖️","🏵️","🎗️","🎫","🎟️","🎪","🤹","🎭","🩰","🎨","🎬","🎤","🎧","🎼","🎹","🪘","🥁","🎷","🎺","🎸","🪕","🎻","🎲","♟️","🎯","🎳","🎮","🎰","🧩"] },
  { icon: "🚗", label: "Travel", emojis: ["🚗","🚕","🚙","🚌","🚎","🏎️","🚓","🚑","🚒","🚐","🛻","🚚","🚛","🚜","🏍️","🛵","🛺","🚲","🛴","🛹","🛼","🚏","🛣️","🛤️","⛽","🛞","🚨","🚥","🚦","🚧","⚓","🛟","⛵","🛶","🚤","🛳️","⛴️","🛥️","🚢","✈️","🛩️","🛫","🛬","🪂","💺","🚁","🚟","🚠","🚡","🛰️","🚀","🛸","🌍","🌎","🌏","🪐","🌙","⭐","🌟","✨","⚡","🌈","🌊","🌋","🏔️","⛰️","🏕️","🏖️","🏜️","🏝️","🏗️","🏘️","🏚️","🏠","🏡","🏢","🏣","🏤","🏥","🏦","🏨","🏩","🏪","🏫","🏬","🏭","🏯","🏰","💒","🗼","🗽","⛪","🕌","🛕","⛩️","🕍"] },
  { icon: "💡", label: "Objects", emojis: ["💡","🔦","🕯️","💰","💳","💎","⚖️","🪜","🔧","🪛","🔨","⚒️","🛠️","⛏️","🪚","🔩","🪤","🧱","🔗","🧲","🪝","🧰","🪣","💊","🩺","🩻","🩹","🩼","🩺","👓","🕶️","🥽","🌡️","📱","💻","🖥️","🖨️","⌨️","🖱️","💾","💿","📀","📷","📸","📹","🎥","📽️","📞","☎️","📟","📠","📺","📻","🧭","⏰","⌚","📡","🔋","🔌","💡","🔦","🕯️","📖","📚","📝","✏️","🖊️","🖋️","📌","📍","📎","🖇️","📐","📏","✂️","🗃️","🗄️","🗑️","🔒","🔓","🔑","🗝️","🔨","🪓","⛏️","⚒️","🛠️","🗡️","⚔️","🛡️","🪃","🏹","🔧","🪛","🔩","⚙️","🗜️","⚗️","🧪","🧫","🧬","🔭","🔬","🩻"] },
  { icon: "❤️", label: "Symbols", emojis: ["❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝","💟","☮️","✝️","☪️","🕉️","✡️","🔯","🕎","☯️","☦️","🛐","⛎","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓","🆔","⚛️","🉑","☢️","☣️","📴","📳","🈶","🈚","🈸","🈺","🈷️","✴️","🆚","💮","🉐","㊙️","㊗️","🈴","🈵","🈹","🈲","🅰️","🅱️","🆎","🆑","🅾️","🆘","⛔","📛","🚫","❌","⭕","🛑","⚠️","🔱","♻️","✅","🆙","🆒","🆕","🆓","⬆️","⬇️","⬅️","➡️","🔄","🔃","💯","🔢","🔣","🔤","🔡","🔠","🎵","🎶","🔕","🔔","🔇","🔈","🔉","🔊","📢","📣","👁️‍🗨️","💬","💭","🗯️","♠️","♣️","♥️","♦️","🃏","🀄","🎴"] },
];

// ═══════════════════════════════════════
//  STATE
// ═══════════════════════════════════════
let pickerCallback = null;   // fn(emoji) called when user picks
let activeCategory = 0;
let searchTimeout = null;

// ═══════════════════════════════════════
//  DOM REFS
// ═══════════════════════════════════════
const hideInput       = document.getElementById("hideInput");
const addHide         = document.getElementById("addHide");
const siteInput       = document.getElementById("siteInput");
const addSite         = document.getElementById("addSite");
const hideListDisplay = document.getElementById("hideListDisplay");
const siteListDisplay = document.getElementById("siteListDisplay");
const statsLabel      = document.getElementById("statsLabel");
const emojiPickerBtn  = document.getElementById("emojiPickerBtn");
const picker          = document.getElementById("emojiPicker");
const pickerGrid      = document.getElementById("pickerGrid");
const pickerCats      = document.getElementById("pickerCategories");
const emojiSearch     = document.getElementById("emojiSearch");

// ═══════════════════════════════════════
//  EMOJI PICKER
// ═══════════════════════════════════════

function buildCategories() {
  pickerCats.innerHTML = "";
  EMOJI_CATEGORIES.forEach((cat, i) => {
    const btn = document.createElement("button");
    btn.className = "cat-btn" + (i === activeCategory ? " active" : "");
    btn.textContent = cat.icon;
    btn.title = cat.label;
    btn.onclick = () => {
      activeCategory = i;
      document.querySelectorAll(".cat-btn").forEach((b, j) => b.classList.toggle("active", j === i));
      emojiSearch.value = "";
      renderGrid(cat.emojis);
    };
    pickerCats.appendChild(btn);
  });
}

function renderGrid(emojis) {
  pickerGrid.innerHTML = "";
  if (!emojis.length) {
    const empty = document.createElement("div");
    empty.className = "picker-empty";
    empty.textContent = "No emoji found";
    pickerGrid.appendChild(empty);
    return;
  }
  emojis.forEach(em => {
    const btn = document.createElement("button");
    btn.className = "emoji-btn";
    btn.textContent = em;
    btn.title = em;
    btn.onclick = () => {
      if (pickerCallback) pickerCallback(em);
      closePicker();
    };
    pickerGrid.appendChild(btn);
  });
}

function openPicker(callback, triggerEl) {
  pickerCallback = callback;
  buildCategories();
  renderGrid(EMOJI_CATEGORIES[activeCategory].emojis);
  emojiSearch.value = "";
  picker.classList.remove("hidden");

  // mark trigger as active
  if (triggerEl) triggerEl.classList.add("active");

  // focus search after animation
  setTimeout(() => emojiSearch.focus(), 80);
}

function closePicker() {
  picker.classList.add("hidden");
  pickerCallback = null;
  emojiPickerBtn.classList.remove("active");
  // remove active from any rule-to boxes
  document.querySelectorAll(".rule-to.active").forEach(el => el.classList.remove("active"));
}

// Close picker when clicking outside
document.addEventListener("click", (e) => {
  if (!picker.contains(e.target) &&
      e.target !== emojiPickerBtn &&
      !e.target.classList.contains("rule-to")) {
    if (!picker.classList.contains("hidden")) closePicker();
  }
});

// Search
emojiSearch.addEventListener("input", () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    const q = emojiSearch.value.trim().toLowerCase();
    if (!q) {
      renderGrid(EMOJI_CATEGORIES[activeCategory].emojis);
      return;
    }
    // Search all categories
    const all = EMOJI_CATEGORIES.flatMap(c => c.emojis);
    // Simple filter: just show matches by character or label approximation
    const results = all.filter(em => em.includes(q));
    renderGrid(results.length ? results : all.slice(0, 40));
  }, 150);
}, false);

// Picker toggle button (for "Add rule" input)
emojiPickerBtn.onclick = (e) => {
  e.stopPropagation();
  if (!picker.classList.contains("hidden")) {
    closePicker();
    return;
  }
  openPicker((em) => {
    hideInput.value = em;
    hideInput.focus();
  }, emojiPickerBtn);
};

// ═══════════════════════════════════════
//  LOAD + DISPLAY DATA
// ═══════════════════════════════════════

function loadData() {
  chrome.storage.sync.get(["emojiRules", "sites"], (data) => {
    const rules = data.emojiRules || [];
    const sites  = data.sites || [];
    displayRules(rules);
    displaySites(sites);
    statsLabel.textContent = `${rules.length} rule${rules.length !== 1 ? "s" : ""} · ${sites.length} site${sites.length !== 1 ? "s" : ""}`;
  });
}

// ═══════════════════════════════════════
//  DISPLAY RULES
// ═══════════════════════════════════════

function displayRules(list) {
  hideListDisplay.innerHTML = "";

  list.forEach((rule, index) => {
    const li = document.createElement("li");

    // FROM box
    const fromBox = document.createElement("div");
    fromBox.className = "rule-from";
    fromBox.textContent = rule.from;

    // arrow
    const arrow = document.createElement("div");
    arrow.className = "rule-arrow";
    arrow.textContent = "→";

    // TO box — clickable to change replacement
    const toBox = document.createElement("div");
    toBox.className = "rule-to";
    toBox.textContent = rule.to;
    toBox.title = "Click to change replacement emoji";

    // Small edit hint tooltip
    const hint = document.createElement("span");
    hint.className = "edit-hint";
    hint.textContent = "change";
    toBox.appendChild(hint);

    toBox.onclick = (e) => {
      e.stopPropagation();
      if (!picker.classList.contains("hidden") && pickerCallback) {
        closePicker();
        return;
      }
      openPicker((em) => {
        rule.to = em;
        chrome.storage.sync.get(["emojiRules"], (data) => {
          const rules = data.emojiRules || [];
          rules[index].to = em;
          chrome.storage.sync.set({ emojiRules: rules }, loadData);
        });
      }, toBox);
      toBox.classList.add("active");
    };

    // label
    const label = document.createElement("div");
    label.className = "rule-label";
    label.textContent = "tap ⬛ to change";

    // delete button
    const btn = document.createElement("button");
    btn.className = "rule-del";
    btn.innerHTML = "&times;";
    btn.title = "Remove rule";
    btn.onclick = () => {
      list.splice(index, 1);
      chrome.storage.sync.set({ emojiRules: list }, loadData);
    };

    li.appendChild(fromBox);
    li.appendChild(arrow);
    li.appendChild(toBox);
    li.appendChild(label);
    li.appendChild(btn);
    hideListDisplay.appendChild(li);
  });
}

// ═══════════════════════════════════════
//  DISPLAY SITES
// ═══════════════════════════════════════

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

// ═══════════════════════════════════════
//  ADD RULE
// ═══════════════════════════════════════

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

// ═══════════════════════════════════════
//  ADD SITE
// ═══════════════════════════════════════

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

// ═══════════════════════════════════════
//  CLEAR ALL
// ═══════════════════════════════════════

document.getElementById("clearAll").onclick = () => {
  chrome.storage.sync.clear(() => {
    loadData();
  });
};

// ═══════════════════════════════════════
//  INIT
// ═══════════════════════════════════════

loadData();