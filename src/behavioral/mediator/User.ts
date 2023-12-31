import Mediator from "./Mediator";

export default class User {
	mediator: Mediator;
	name: string;

	constructor(name: string, mediator: Mediator) {
		this.mediator = mediator;
		this.name = name;
	}
	public send(message: string): void {
		this.mediator.send(this, message);
	}

	public recieve(sender: User, message: string): void {
		console.log(`${this.name} recieved message ${message} from ${sender.name}`);
	}
}
