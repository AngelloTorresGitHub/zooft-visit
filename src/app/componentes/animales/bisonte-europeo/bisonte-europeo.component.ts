import { LenguajeServicio } from './../../../Servicios/lenguaje.service';
import { Component, OnInit } from '@angular/core';
import { AnimalServicio } from 'src/app/Servicios/animal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-bisonte-europeo',
  templateUrl: './bisonte-europeo.component.html',
  styleUrls: ['./bisonte-europeo.component.sass'],
})
export class BisonteEuropeoComponent implements OnInit {

  constructor(
    private animalServicio: AnimalServicio,
    private cookieService: CookieService,
    private lenguajeServicio: LenguajeServicio
  ) {  }

  ngOnInit(): void {
    /* Se envía: ruta, código, zona */
    this.animalServicio.setAnimalService('/animal/bisonteEuropeo', '18', 'B');
    this.lenguajeServicio.lenguaje(this.cookieService.get('zooftLang'));
  }
}
