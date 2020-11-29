import { LenguajeServicio } from './../../../Servicios/lenguaje.service';
import { Component, OnInit } from '@angular/core';
import { AnimalServicio } from 'src/app/Servicios/animal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-ibis-sagrado',
  templateUrl: './ibis-sagrado.component.html',
  styleUrls: ['./ibis-sagrado.component.sass']
})
export class IbisSagradoComponent implements OnInit {

  constructor(
    private animalServicio: AnimalServicio,
    private cookieService: CookieService,
    private lenguajeServicio: LenguajeServicio
  ) {  }

  ngOnInit(): void {
    /* Se envía: ruta, código, zona */
    this.animalServicio.setAnimalService('/animal/ibisSagrado', '58', 'E');
    this.lenguajeServicio.lenguaje(this.cookieService.get('zooftLang'));
  }
}
