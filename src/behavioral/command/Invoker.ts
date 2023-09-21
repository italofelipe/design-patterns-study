import Command from "./Command";

export default class Invoker {
	commands: Command[];
	constructor() {
		this.commands = [];
	}

	public storeAndExecute(command: Command) {
		this.commands.push(command);
		command.execute();
	}
}
