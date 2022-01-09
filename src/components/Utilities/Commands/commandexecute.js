import commands from "./commands";
import ls from "./folderstructure";
const commandexecute = (cmd,path) => {
    switch(cmd){
        case "help" : return `These are the available commands for this interface:\nhelp - Displays all commands available\npwd - Prints the present directory\nls - Lists the files in the present directory`;
        case "pwd" : if(path === "") return "/home/diganta";
                      else return "/home/diganta/"+path;
        case "ls" : const dir = ls(path);
                    return <span>
                        <span className="text-white">{dir.folders.map((x)=>x)}</span>
                        <span className="text-blue">{dir.files.map((x)=>x)}</span>
                    </span>
        default: return("Command not found: "+cmd);
    }
};

export default commandexecute;