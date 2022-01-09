const root = {
    folders:["about        ","experience        ","skils        ","projects        ","contact        "],
    files:["main-website        ","resume        "]
}

const ls = (dir) => {
    switch(dir){
        case "": return root;
        default: return "Directory not found";
    }
};
export default ls;