import Item from "./Item";
import LocalOrder from "./LocalOrder";
import OnlineOrder from "./OnlineOrder";

const item1 = new Item("iPhone", 10);
const item2 = new Item("MacBook Pro", 35);

const localOrder = new LocalOrder();
localOrder.addItem(item1);
localOrder.addItem(item2);
console.log(localOrder.getTotal());

const onlineOrder = new OnlineOrder();
onlineOrder.addItem(item1);
onlineOrder.addItem(item2);
console.log(onlineOrder.getTotal());

/**
Expected Output:
  60.75
  54
*/
