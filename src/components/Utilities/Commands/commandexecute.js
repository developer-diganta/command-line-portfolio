import commands from "./commands";
import ls from "./folderstructure";
import OpenFile from "./OpenFile";
import checkPathAndFile from "./checkPathAndFile";
const commandexecute = (cmd, path) => {
    const cmds = cmd.split(" ");
    const comd = cmds[0];
    console.log(comd)
    switch (comd) {
        case "help": return `These are the available commands for this interface:\nhelp - Displays all commands available\npwd - Prints the present directory\nls - Lists the files in the present directory\nopen - open files/links\ncd - Change directory`;
        case "pwd": if (path === "") return "/home/diganta";
        else return "/home/diganta/" + path;
        case "ls":
            if(cmds.length>1) return "Invalid command";
            const dir = ls(path);
            return <span>
                <span className="text-white">{dir.folders?dir.folders.map((x) => x):null}</span>
                <span className="text-blue">{dir.files?dir.files.map((x) => x):null}</span>
            </span>
        case "open":
            if (cmds[1] === " " || cmds.length > 2)
                return "Invalid command";
            else {
                if (!checkPathAndFile(path, cmds[1])) return "File not found";
                return OpenFile(cmds[1]);
            }
        case "cd": if (cmds[1] === " " || cmds.length > 2) return "Invalid command";
        else {
            if (cmds[1] === "..") {
                if (path === "") return "Invalid command";
                else {
                    const newPath = path.split("/");
                    newPath.pop();
                    return newPath.join("/");
                }
            }
            else {
                if (path === "") return "/home/diganta/" + cmds[1];
                else return "/home/diganta/" + path + "/" + cmds[1];
            }
        }
        default: return("Command not found: "+cmd);
    }
};

export default commandexecute;