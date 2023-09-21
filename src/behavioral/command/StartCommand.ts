import Command from "./Command";
import Server from "./Server";

export default class StartCommand extends Command {
	private server: Server;
	constructor(server: Server) {
		super();
		this.server = server;
	}
	execute() {
		this.server.start();
	}
}
