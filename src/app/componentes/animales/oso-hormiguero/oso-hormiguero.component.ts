import { LenguajeServicio } from './../../../Servicios/lenguaje.service';
import { Component, OnInit } from '@angular/core';
import { AnimalServicio } from 'src/app/Servicios/animal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-oso-hormiguero',
  templateUrl: './oso-hormiguero.component.html',
  styleUrls: ['./oso-hormiguero.component.sass']
})
export class OsoHormigueroComponent implements OnInit {

  constructor(
    private animalServicio: AnimalServicio,
    private cookieService: CookieService,
    private lenguajeServicio: LenguajeServicio
  ) {  }

  ngOnInit(): void {
    /* Se envía: ruta, código, zona */
    this.animalServicio.setAnimalService('/animal/osoHormiguero', '35', 'C');
    this.lenguajeServicio.lenguaje(this.cookieService.get('zooftLang'));
  }
}
