const map = {
    "resume": "",
    "main-website": "",
    "about-me": "/about",
    "me.jpg": "/about",
    "linkedin": "/contact",
    "github": "/contact",
    "twitter": "/contact",
    "devpost": "/contact",
    "email": "/contact",
    "phone": "/contact",
    "facebook": "/contact",
    "leetcode": "/contact",
    "Amazon-Clone": "/projects",
    "Keep-A-Note": "/projects",
    "Chatter": "/projects",
    "Sharer": "/projects",
    "The-Melody-Box": "/projects",
    "Its-Time-To-Be-One-Of-Us": "/projects",
}

export default function checkPathAndFile(path, file) {
    console.log("PATH: ", path);
    console.log("FILE: ", file);
    if (map[file] === path) return true;
    return false;
}