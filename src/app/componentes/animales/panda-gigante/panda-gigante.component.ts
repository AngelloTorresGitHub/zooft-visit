import { LenguajeServicio } from './../../../Servicios/lenguaje.service';
import { Component, OnInit } from '@angular/core';
import { AnimalServicio } from 'src/app/Servicios/animal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-panda-gigante',
  templateUrl: './panda-gigante.component.html',
  styleUrls: ['./panda-gigante.component.sass'],
})
export class PandaGiganteComponent implements OnInit {

  constructor(
    private animalServicio: AnimalServicio,
    private cookieService: CookieService,
    private lenguajeServicio: LenguajeServicio
  ) {  }

  ngOnInit(): void {
    /* Se envía: ruta, código, zona */
    this.animalServicio.setAnimalService('/animal/pandaGigante', '15', 'B');
    this.lenguajeServicio.lenguaje(this.cookieService.get('zooftLang'));
  }
}
