import { LenguajeServicio } from './../../../Servicios/lenguaje.service';
import { Component, OnInit } from '@angular/core';
import { AnimalServicio } from 'src/app/Servicios/animal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tigre-bengala',
  templateUrl: './tigre-bengala.component.html',
  styleUrls: ['./tigre-bengala.component.sass']
})
export class TigreBengalaComponent implements OnInit {

  constructor(
    private animalServicio: AnimalServicio,
    private cookieService: CookieService,
    private lenguajeServicio: LenguajeServicio
  ) {  }

  ngOnInit(): void {
    /* Se envía: ruta, código, zona */
    this.animalServicio.setAnimalService('/animal/tigreBengala', '40', 'D');
    this.lenguajeServicio.lenguaje(this.cookieService.get('zooftLang'));
  }
}
