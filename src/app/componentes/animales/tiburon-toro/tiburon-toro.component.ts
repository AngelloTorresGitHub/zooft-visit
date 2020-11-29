import { LenguajeServicio } from './../../../Servicios/lenguaje.service';
import { Component, OnInit } from '@angular/core';
import { AnimalServicio } from 'src/app/Servicios/animal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tiburon-toro',
  templateUrl: './tiburon-toro.component.html',
  styleUrls: ['./tiburon-toro.component.sass']
})
export class TiburonToroComponent implements OnInit {

  constructor(
    private animalServicio: AnimalServicio,
    private cookieService: CookieService,
    private lenguajeServicio: LenguajeServicio
  ) {  }

  ngOnInit(): void {
    /* Se envía: ruta, código, zona */
    this.animalServicio.setAnimalService('/animal/tiburonToro', '55', 'E');
    this.lenguajeServicio.lenguaje(this.cookieService.get('zooftLang'));
  }
}
