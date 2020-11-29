import { LenguajeServicio } from './../../../Servicios/lenguaje.service';
import { Component, OnInit } from '@angular/core';
import { AnimalServicio } from 'src/app/Servicios/animal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-lince-iberico',
  templateUrl: './lince-iberico.component.html',
  styleUrls: ['./lince-iberico.component.sass']
})
export class LinceIbericoComponent implements OnInit {

  constructor(
    private animalServicio: AnimalServicio,
    private cookieService: CookieService,
    private lenguajeServicio: LenguajeServicio
  ) {   }

  ngOnInit(): void {
    /* Se envía: ruta, código, zona */
    this.animalServicio.setAnimalService('/animal/linceIberico', '03', 'A');
    this.lenguajeServicio.lenguaje(this.cookieService.get('zooftLang'));
  }

}
