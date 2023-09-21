import Product from "./Product";
import Visitor from "./Visitor";

export default class HolidayTaxVisitor implements Visitor {
	visit(product: Product) {
		return product.price * 1.30;
	}
}
