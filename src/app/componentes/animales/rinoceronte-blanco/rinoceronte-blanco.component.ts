import { LenguajeServicio } from './../../../Servicios/lenguaje.service';
import { Component, OnInit } from '@angular/core';
import { AnimalServicio } from 'src/app/Servicios/animal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-rinoceronte-blanco',
  templateUrl: './rinoceronte-blanco.component.html',
  styleUrls: ['./rinoceronte-blanco.component.sass']
})
export class RinoceronteBlancoComponent implements OnInit {

  constructor(
    private animalServicio: AnimalServicio,
    private cookieService: CookieService,
    private lenguajeServicio: LenguajeServicio
  ) {  }

  ngOnInit(): void {
    /* Se envía: ruta, código, zona */
    this.animalServicio.setAnimalService('/animal/rinoceronteBlanco', '82', 'G');
    this.lenguajeServicio.lenguaje(this.cookieService.get('zooftLang'));
  }
}
