import { Injectable } from '@angular/core';

@Injectable()
export class AnimalServicio {

  animal = {
    ruta : '',
    cod : '',
    zona : '',
  };

  setAnimalService(rutaAnimal, codAnimal, zonaAnimal) {
    this.animal.ruta = rutaAnimal;
    this.animal.cod = codAnimal;
    this.animal.zona = zonaAnimal;
  }

  getAnimalService() {
    return this.animal;
  }
}

