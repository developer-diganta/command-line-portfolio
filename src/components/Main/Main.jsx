import { useState, useEffect } from "react";
import Banner from "../Utilities/Banner/banner.jsx";
import "./main.css"
import commandexecute from "../Utilities/Commands/commandexecute.js";
import checkIfPathExists from "../Utilities/Commands/AllPaths.js";
const Main = () => {
    // const [path,updatePath] = useState(null);
    const [commands,updateCommands] = useState(['']);
    let backCommands = 0;
    let path = "";
    const handleKeyPress = (event) => {
        if(event.key === "ArrowUp"){
            console.log(backCommands);
            const triggeredEvent = event.target;
            const newCommand = commands[backCommands];
            setTimeout(()=>triggeredEvent.selectionStart = newCommand.length+1,0);
            setTimeout(()=>triggeredEvent.selectionEnd = newCommand.length+1,0);
            triggeredEvent.value=newCommand;
            backCommands = backCommands-1>=0?backCommands-1:0;
        }
        if(event.key === "ArrowDown"){
            console.log(backCommands);
            backCommands = backCommands+1<commands.length?backCommands+1:backCommands;
            const triggeredEvent = event.target;
            const newCommand = commands[backCommands];
            setTimeout(()=>triggeredEvent.selectionStart = newCommand.length+1,0);
            setTimeout(()=>triggeredEvent.selectionEnd = newCommand.length+1,0);
            triggeredEvent.value=newCommand;

        }
        if (event.key === 'Enter') {
            event.target.disabled = true;
            event.preventDefault();
            var temp = "";
            const p = event.target.value.split(" ");
            if (p.length === 2 && p[0] === "cd") { 
                if (checkIfPathExists(p[1]))
                    if (p[1] === "..")
                        path = "";
                    else
                        if (path === " ")
                            path = "/" + p[1];
                        else {
                            if (path.length > 2) {
                                temp = "Directory not found";              
                            }
                            else
                            path = "/" + path + p[1];
                        }
                else
                    temp = "Directory not found";    
            }
          console.log(path)
            const response = p[0]==="cd"?temp:commandexecute(event.target.value,path);
            const responseDisplay = <div className="display-content utility text-white"><span className="command text-white">{response}</span></div>
            terminal.push(responseDisplay);
            terminal.push(<span className="command text-mainGreen font-semibold">root@diganta-portfolio{path}:~<span className="text-blue">$ </span><input type="text" className="utility text-white" autoFocus onBlur={({ target }) => target.focus()} onKeyDown={handleKeyPress}/></span>)
            updateTerminal([...terminal])
            const newCommands = commands.push(event.target.value);
            updateCommands(newCommands);
            backCommands = commands.length-1;
        }
      }
    const [terminal, updateTerminal] = useState([<span className="command text-mainGreen font-semibold">root@diganta-portfolio:~<span className="text-blue">$ </span><input type="text" className="utility text-white" autoFocus onBlur={({ target }) => target.focus()} onKeyDown={handleKeyPress}/></span>]);

    return (
        
        <div>
            <pre className="text-white">{Banner}</pre> 
            <div className="text-white mt-3 w-1/2">
                Welcome to Diganta's command line portfolio.
                Start with $help to know the commands for this interface.
            </div>
            <div id="i">
                {terminal.map((x)=>x)}
            </div> 
        </div>
    )
};

export default Main;

