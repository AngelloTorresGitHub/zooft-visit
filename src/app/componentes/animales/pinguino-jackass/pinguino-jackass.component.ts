import { LenguajeServicio } from './../../../Servicios/lenguaje.service';
import { Component, OnInit } from '@angular/core';
import { AnimalServicio } from 'src/app/Servicios/animal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-pinguino-jackass',
  templateUrl: './pinguino-jackass.component.html',
  styleUrls: ['./pinguino-jackass.component.sass']
})
export class PinguinoJackassComponent implements OnInit {

  constructor(
    private animalServicio: AnimalServicio,
    private cookieService: CookieService,
    private lenguajeServicio: LenguajeServicio
  ) {  }

  ngOnInit(): void {
    /* Se envía: ruta, código, zona */
    this.animalServicio.setAnimalService('/animal/pinguinoJackass', '45', 'D');
    this.lenguajeServicio.lenguaje(this.cookieService.get('zooftLang'));
  }
}
