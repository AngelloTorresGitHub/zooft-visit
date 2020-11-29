import { LenguajeServicio } from './../../../Servicios/lenguaje.service';
import { Component, OnInit } from '@angular/core';
import { AnimalServicio } from 'src/app/Servicios/animal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-lobo-gris',
  templateUrl: './lobo-gris.component.html',
  styleUrls: ['./lobo-gris.component.sass'],
})
export class LoboGrisComponent implements OnInit {

  constructor(
    private animalServicio: AnimalServicio,
    private cookieService: CookieService,
    private lenguajeServicio: LenguajeServicio
  ) {  }

  ngOnInit(): void {
    /* Se envía: ruta, código, zona */
    this.animalServicio.setAnimalService('/animal/loboGris', '02', 'A');
    this.lenguajeServicio.lenguaje(this.cookieService.get('zooftLang'));
  }
}
