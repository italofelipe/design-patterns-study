export default abstract class Handler {
	private handler?: Handler;

	constructor() {}

	public setHandler(handler: Handler) {
		this.handler = handler;
	}

	public operation(request: string) {
		if (this.handlerRequest(request)) {
			this.handler?.operation(request);
		}
	}

	abstract handlerRequest(request: string): boolean;
}
