const root = {
    folders:["about         ","experience            ","skills           ","projects            ","contact          "],
    files:["main-website            ","resume           "]
}

const about = {
    files:["about-me            ","me.jpg           "],
}

const experience = {
    files: ["SDE_Intern:Curiosity-Edtech-Private-Limited_Nov_2021_to_Feb_2022"],
}

const skills = {
    files: ["html         ", "css         ", "javascript         ", "bootstrap         ", "tailwindCSS         ", "reactjs         ", "nodejs         ", "c         ", "c++         ", "docker         ", "yaml         ", "expressjs         ", "mongodb         ", "mysql         "]
}

const contact = {
    files: ["github         ", "linkedin         ", "twitter         ", "devpost         ", "email         ", "phone         ", "facebook         ", "leetcode        "]
};

const projects = {
    files: ["Amazon-Clone         ", "Keep-A-Note         ", "Chatter         ", "Sharer         ", "The-Melody-Box         "]
};

const ls = (dir) => {
    console.log("DIR: ", dir);
    switch(dir){
        case "": return root;
        case "/about": return about;
        case "/experience": return experience;
        case "/skills": return skills;
        case "/contact": return contact;
        case "/projects": return projects;
        default: return "Directory not found";
    }
};
export default ls;