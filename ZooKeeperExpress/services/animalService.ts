import { Animal } from '../models/animalModel';

export class AnimalService {
    private animals: Animal[] = [];

    addAnimal(animal: Animal) {
        this.animals.push(animal);
    }

    getAnimals(): Animal[] {
        return this.animals;
    }

    updateAnimal(id: string, updatedAnimal: Animal) {
        const index = this.animals.findIndex(animal => animal.id === id);
        if (index !== -1) {
            this.animals[index] = updatedAnimal;
        }
    }

    deleteAnimal(id: string) {
        this.animals = this.animals.filter(animal => animal.id !== id);
    }
}
