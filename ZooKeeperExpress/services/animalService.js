"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalService = void 0;
class AnimalService {
    constructor() {
        this.animals = [];
    }
    addAnimal(animal) {
        this.animals.push(animal);
    }
    getAnimals() {
        return this.animals;
    }
    updateAnimal(id, updatedAnimal) {
        const index = this.animals.findIndex(animal => animal.id === id);
        if (index !== -1) {
            this.animals[index] = updatedAnimal;
        }
    }
    deleteAnimal(id) {
        this.animals = this.animals.filter(animal => animal.id !== id);
    }
}
exports.AnimalService = AnimalService;
