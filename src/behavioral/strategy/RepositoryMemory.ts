import Entity from "./Entity";
import Repository from "./Repository";

export default class RepositoryMemory implements Repository {
	save(entity: Entity) {
		console.log("memory save entity");
	}
	get(id: number) {
		console.log("memory get entity");
	}
	update(entity: Entity) {
		console.log("memory update entity");
	}
	delete(id: number) {
		console.log("memory delete entity");
	}
	count() {
		console.log("memory count entities");
		return 10;
	}
}
