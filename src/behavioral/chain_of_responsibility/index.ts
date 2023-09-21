import AuthenticationHandler from "./AuthenticationHandler";
import AuthorizationHandler from "./AuthorizationHandler";
import LogHandler from "./LogHandler";

const reqs = ["Request 1", "Request 2", "Request 3", "Request 4", "Request 5"];

const logHandler = new LogHandler();
const authenticationHandler = new AuthenticationHandler();
const authorizationHandler = new AuthorizationHandler();

logHandler.setHandler(authenticationHandler);
authenticationHandler.setHandler(authorizationHandler);
for (const req of reqs) {
	logHandler.operation(req);
}
// Expected output: All requests are handled except Request 2 (which is rejected by AuthenticationHandler)

