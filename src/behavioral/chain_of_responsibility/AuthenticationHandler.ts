import Handler from "./Handler";

export default class AuthenticationHandler extends Handler {
	constructor() {
		super();
	}
	public handlerRequest(request: string) {
		console.log(`Authentication: ${request}`);
		if (request === "Request 2") return false;
		return true;
	}
}
