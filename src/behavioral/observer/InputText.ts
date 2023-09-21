import Observer from "./Observer";

export default class InputText {
	observers: Observer[];
	constructor() {
		this.observers = [];
	}

	register(observer: Observer) {
		this.observers.push(observer);
	}
	notifyAll() {
		this.observers.forEach((observer) => observer.update());
	}
	unregister(observer: Observer) {
		const position = this.observers.indexOf(observer);
		this.observers.splice(position, 1);
	}
}
