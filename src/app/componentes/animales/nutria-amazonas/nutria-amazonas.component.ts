import { LenguajeServicio } from './../../../Servicios/lenguaje.service';
import { Component, OnInit } from '@angular/core';
import { AnimalServicio } from 'src/app/Servicios/animal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nutria-amazonas',
  templateUrl: './nutria-amazonas.component.html',
  styleUrls: ['./nutria-amazonas.component.sass']
})
export class NutriaAmazonasComponent implements OnInit {

  constructor(
    private animalServicio: AnimalServicio,
    private cookieService: CookieService,
    private lenguajeServicio: LenguajeServicio
  ) {  }

  ngOnInit(): void {
    /* Se envía: ruta, código, zona */
    this.animalServicio.setAnimalService('/animal/nutriaAmazonas', '66', 'G');
    this.lenguajeServicio.lenguaje(this.cookieService.get('zooftLang'));
  }
}
