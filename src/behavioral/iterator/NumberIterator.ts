import Iterator from "./Iterator";
export default class NumberIterator implements Iterator {
	private collection: number[] = [];
	private position = 0;

	constructor(collection: number[]) {
		this.collection = collection;
	}
	public next(): number {
		const result = this.collection[this.position];
		this.position += 1;
		return result;
	}

	public hasNext(): boolean {
		return this.position < this.collection.length;
	}
}

/*
  Expected Output:
1
2
3
4
5
6
7
8
9
  
 */