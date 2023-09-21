import Entity from "./Entity";
import Repository from "./Repository";

export default class RepositoryDatabase implements Repository {
	save(entity: Entity) {
		console.log("Database save entity");
	}
	get(id: number) {
		console.log("Database get entity");
	}
	update(entity: Entity) {
		console.log("Database update entity");
	}
	delete(id: number) {
		console.log("Database delete entity");
	}
	count() {
		console.log("Database count entities");
		return 10;
	}
}
