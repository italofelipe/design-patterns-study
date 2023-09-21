import Handler from "./Handler";

export default class AuthorizationHandler extends Handler {
	constructor() {
		super();
	}
	public handlerRequest(request: string) {
		console.log(`Authorization: ${request}`);
		return true;
	}
}