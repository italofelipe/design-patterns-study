import Mediator from "./Mediator";
import User from "./User";

const mediator = new Mediator();
const john = new User("John", mediator);
const Clara = new User("Clara", mediator);
const Ana = new User("Ana", mediator);

mediator.addUser(john);
mediator.addUser(Clara);
mediator.addUser(Ana);

john.send("Hello everyone!");
Clara.send("Hello John!");
Ana.send("Heey John");

/**
Expected output:
  Clara recieved message Hello everyone! from John
  Ana recieved message Hello everyone! from John
  John recieved message Hello John! from Clara
  Ana recieved message Hello John! from Clara
  John recieved message Heey John from Ana
  Clara recieved message Heey John from Ana
 */