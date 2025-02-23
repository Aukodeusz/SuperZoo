import { Request, Response } from 'express';
import { AnimalService } from '../services/animalService';

const animalService = new AnimalService();

export const addAnimal = (req: Request, res: Response) => {
    const newAnimal = req.body;
    animalService.addAnimal(newAnimal);
    res.status(201).send(newAnimal);
};

export const getAnimals = (req: Request, res: Response) => {
    const animals = animalService.getAnimals();
    res.status(200).send(animals);
};

export const updateAnimal = (req: Request, res: Response) => {
    const animalId = req.params.id;
    const updatedAnimal = req.body;
    animalService.updateAnimal(animalId, updatedAnimal);
    res.status(200).send(updatedAnimal);
};

export const deleteAnimal = (req: Request, res: Response) => {
    const animalId = req.params.id;
    animalService.deleteAnimal(animalId);
    res.status(204).send();
};
