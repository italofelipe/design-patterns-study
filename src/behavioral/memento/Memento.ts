export default class Memento {
	private _state: string;

	constructor(state: string) {
		this._state = state;
	}
	get state(): string {
		console.log("Get memento's state");
		return this._state;
	}
}
