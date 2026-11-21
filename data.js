/* ===== EDIT THIS FILE to change links, mods and accounts ===== */
const LINKS = {
  discord:   "https://discord.gg/ECQZhRkccJ",
  telegram:  "https://t.me/DOBEYSLEGACY",
  youtube:   "https://youtube.com/@dobeyslegacy",
  instagram: "https://www.instagram.com/dobeyslegacy.official",
  x:         "" // TODO: paste your Twitter/X URL here. Empty = shows "Coming soon"
};

// cat = category shown on the filter buttons. link = download URL. img = optional thumbnail path (e.g. "img/skin1.jpg")
const SAMP = [
  { name:"Sample Male Skin",   cat:"Male Skins",   desc:"Replace this with your description.", link:"#", img:"" },
  { name:"Sample Female Skin", cat:"Female Skins", desc:"Replace this with your description.", link:"#", img:"" },
  { name:"Sample Skin Pack",   cat:"Skin Packs",   desc:"Replace this with your description.", link:"#", img:"" },
  { name:"Sample Weapon Mod",  cat:"Weapon Mods",  desc:"Replace this with your description.", link:"#", img:"" },
  { name:"Sample Gun Sound",   cat:"Gun Sounds",   desc:"Replace this with your description.", link:"#", img:"" },
  { name:"Sample Other Mod",   cat:"Other",        desc:"Replace this with your description.", link:"#", img:"" }
];
const FIVEM = [
  { name:"Sample Vehicle Resource", cat:"Vehicles", desc:"Replace this with your description.", link:"#", img:"" },
  { name:"Sample Clothing Pack",    cat:"Clothing", desc:"Replace this with your description.", link:"#", img:"" },
  { name:"Sample Script",           cat:"Scripts",  desc:"Replace this with your description.", link:"#", img:"" },
  { name:"Sample MLO / Map",        cat:"Maps",     desc:"Replace this with your description.", link:"#", img:"" }
];
// status: "Available" or "Sold out"
const STEAM = [
  { name:"GTA 5",                 info:"Full access account. Details on Discord.", status:"Available", img:"" },
  { name:"Red Dead Redemption 2", info:"Full access account. Details on Discord.", status:"Available", img:"" },
  { name:"FC 27",                 info:"Full access account. Details on Discord.", status:"Available", img:"" }
];

// ===== JOIN TO UNLOCK =====
// One entry per file. Share the page as: unlock.html?file=ID  (e.g. unlock.html?file=example-pack)
const UNLOCKS = {
  "default":      { name:"Your Download", link:"#" },
  "example-pack": { name:"Example Skin Pack", link:"#" }  // replace link, copy this line for more files
};
