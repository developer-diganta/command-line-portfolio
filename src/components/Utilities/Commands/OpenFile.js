export default function OpenFile(cmd){
    switch (cmd) {
        case "main-website":
            window.open("https://digantakrbanik.codes/", '_blank').focus();
            return "Opening File...";
        case "resume":
            window.open("https://drive.google.com/file/d/1rjXdCH9-psOieGDsn0algZ0Nj_allLLy/view?usp=sharing", '_blank').focus();
            return "Opening File...";
        default: return ("Error running command");
    }
}