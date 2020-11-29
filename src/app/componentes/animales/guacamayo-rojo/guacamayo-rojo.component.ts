import { LenguajeServicio } from './../../../Servicios/lenguaje.service';
import { Component, OnInit } from '@angular/core';
import { AnimalServicio } from 'src/app/Servicios/animal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-guacamayo-rojo',
  templateUrl: './guacamayo-rojo.component.html',
  styleUrls: ['./guacamayo-rojo.component.sass']
})
export class GuacamayoRojoComponent implements OnInit {

  constructor(
    private animalServicio: AnimalServicio,
    private cookieService: CookieService,
    private lenguajeServicio: LenguajeServicio,
  ) {  }

  ngOnInit(): void {
    /* Se envía: ruta, código, zona */
    this.animalServicio.setAnimalService('/animal/guacamayoRojo', '64', 'F');
    this.lenguajeServicio.lenguaje(this.cookieService.get('zooftLang'));
  }
}
