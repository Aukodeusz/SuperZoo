"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAnimal = exports.updateAnimal = exports.getAnimals = exports.addAnimal = void 0;
const animalService_1 = require("../services/animalService");
const animalService = new animalService_1.AnimalService();
const addAnimal = (req, res) => {
    const newAnimal = req.body;
    animalService.addAnimal(newAnimal);
    res.status(201).send(newAnimal);
};
exports.addAnimal = addAnimal;
const getAnimals = (req, res) => {
    const animals = animalService.getAnimals();
    res.status(200).send(animals);
};
exports.getAnimals = getAnimals;
const updateAnimal = (req, res) => {
    const animalId = req.params.id;
    const updatedAnimal = req.body;
    animalService.updateAnimal(animalId, updatedAnimal);
    res.status(200).send(updatedAnimal);
};
exports.updateAnimal = updateAnimal;
const deleteAnimal = (req, res) => {
    const animalId = req.params.id;
    animalService.deleteAnimal(animalId);
    res.status(204).send();
};
exports.deleteAnimal = deleteAnimal;
