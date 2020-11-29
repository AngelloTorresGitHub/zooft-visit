import { LenguajeServicio } from './../../../Servicios/lenguaje.service';
import { Component, OnInit } from '@angular/core';
import { AnimalServicio } from 'src/app/Servicios/animal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-loro-arcoiris',
  templateUrl: './loro-arcoiris.component.html',
  styleUrls: ['./loro-arcoiris.component.sass']
})
export class LoroArcoirisComponent implements OnInit {
  rutaAnimal: string;
  codAnimal: string;
  zonaAnimal: string;

  constructor(
    private animalServicio: AnimalServicio,
    private cookieService: CookieService,
    private lenguajeServicio: LenguajeServicio
  ) {
    this.rutaAnimal = '/animal/loroArcoiris';
    this.codAnimal = '61';
    this.zonaAnimal = 'F';
  }

  ngOnInit(): void {
    this.animalServicio.setAnimalService(this.rutaAnimal, this.codAnimal, this.zonaAnimal);
    this.lenguajeServicio.lenguaje(this.cookieService.get('zooftLang'));
  }
}
