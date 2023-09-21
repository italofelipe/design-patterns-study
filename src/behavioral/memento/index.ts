import Originator from "./Originator";

const savedStates = [];

const originator = new Originator("A");
savedStates.push(originator.createMemento());
originator.state = "B";
savedStates.push(originator.createMemento());
originator.state = "C";

savedStates.push(originator.createMemento());
originator.state = "D";
savedStates.push(originator.createMemento());
originator.state = "E";

savedStates.push(originator.createMemento());

originator.setMemento(savedStates[0]);
console.log(originator.state);

originator.setMemento(savedStates[1]);
console.log(originator.state);

originator.setMemento(savedStates[2]);
console.log(originator.state);

/**
Expected output:
  Create a memento with a given state
  Create a memento with a given state
  Create a memento with a given state
  Create a memento with a given state
  Create a memento with a given state
  Set the state back
  Get memento's state
  A
  Set the state back
  Get memento's state
  B
  Set the state back
  Get memento's state
  C
 */
