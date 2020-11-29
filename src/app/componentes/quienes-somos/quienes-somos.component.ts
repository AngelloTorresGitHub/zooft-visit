import { LenguajeServicio } from './../../Servicios/lenguaje.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { AnimalServicio } from 'src/app/Servicios/animal.service';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.sass']
})
export class QuienesSomosComponent implements OnInit {
  ruta: string;

  constructor(
    private animalServicio: AnimalServicio,
    private cookieService: CookieService,
    private lenguajeServicio: LenguajeServicio) {
    this.ruta = this.animalServicio.getAnimalService().ruta;
  }

  ngOnInit(): void {
    this.lenguajeServicio.lenguaje(this.cookieService.get('zooftLang'));
  }
}
