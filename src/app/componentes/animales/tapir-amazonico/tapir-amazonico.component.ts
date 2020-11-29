import { LenguajeServicio } from './../../../Servicios/lenguaje.service';
import { Component, OnInit } from '@angular/core';
import { AnimalServicio } from 'src/app/Servicios/animal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tapir-amazonico',
  templateUrl: './tapir-amazonico.component.html',
  styleUrls: ['./tapir-amazonico.component.sass']
})
export class TapirAmazonicoComponent implements OnInit {

  constructor(
    private animalServicio: AnimalServicio,
    private cookieService: CookieService,
    private lenguajeServicio: LenguajeServicio
  ) {  }

  ngOnInit(): void {
    /* Se envía: ruta, código, zona */
    this.animalServicio.setAnimalService('/animal/tapirAmazonico', '36', 'C');
    this.lenguajeServicio.lenguaje(this.cookieService.get('zooftLang'));
  }
}
