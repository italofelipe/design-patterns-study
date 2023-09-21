import Invoker from "./Invoker";
import RestartCommand from "./RestartCommand";
import Server from "./Server";
import StartCommand from "./StartCommand";
import StopCommand from "./StopCommand";

const server = new Server();
const start = new StartCommand(server);
const stop = new StopCommand(server);
const restart = new RestartCommand(server);
const invoker = new Invoker();

invoker.storeAndExecute(start);
invoker.storeAndExecute(stop);
invoker.storeAndExecute(restart);
console.log(invoker.commands);

/* Expected Output:
Starting server...
Stop server
Restart server
[
  StartCommand { server: Server {} },
  StopCommand { server: Server {} },
  RestartCommand { server: Server {} }
]

 */
