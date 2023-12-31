import User from "./User";

export default class Mediator {
	users: User[];
  
	constructor() {
		this.users = [];
	}

	addUser(user: User): void {
		this.users.push(user);
	}

	public send(sender: User, message: string): void {
		for (const user of this.users) {
			if (user === sender) continue;
			user.recieve(sender, message);
		}
	}
}
