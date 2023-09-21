import Handler from "./Handler";

export default class LogHandler extends Handler {
	constructor() {
		super();
	}
	public handlerRequest(request: string) {
		console.log(`Log: ${request}`);
		return true;
	}
}