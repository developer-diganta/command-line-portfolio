import commands from "./commands";
import ls from "./folderstructure";
import OpenFile from "./OpenFile";
const commandexecute = (cmd, path) => {
    const cmds = cmd.split(" ");
    const comd = cmds[0];
    console.log(comd)
    switch (comd) {
        case "help": return `These are the available commands for this interface:\nhelp - Displays all commands available\npwd - Prints the present directory\nls - Lists the files in the present directory\nopen - open files/links\ncd - Change directory`;
        case "pwd": if (path === "") return "/home/diganta";
        else return "/home/diganta/" + path;
        case "ls": const dir = ls(path);
            return <span>
                <span className="text-white">{dir.folders.map((x) => x)}</span>
                <span className="text-blue">{dir.files.map((x) => x)}</span>
            </span>
        case "open":
            if (cmds[1] === " " || cmds.length > 2)
                return "Invalid command";
            else
                return OpenFile(cmds[1]);
        default: return("Command not found: "+cmd);
    }
};

export default commandexecute;