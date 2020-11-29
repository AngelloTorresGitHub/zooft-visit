import { LenguajeServicio } from './../../Servicios/lenguaje.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { AnimalServicio } from 'src/app/Servicios/animal.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
  ruta = '';

  constructor(
    private animalServicio: AnimalServicio,
    private cookieService: CookieService,
    private lenguajeServicio: LenguajeServicio
  ) {
    // this.ruta = this.AnimalServicio.getAnimalService();
  }

  ngOnInit(): void {}

  onCambiarColor(): void {
    document.body.classList.toggle('dark');
    document.querySelector('#switch').classList.toggle('active');

    if (document.body.classList.contains('dark')) {
      this.cookieService.set('zooftDark', 'true', 1);
    } else {
      this.cookieService.set('zooftDark', 'false', 1);
    }
  }

  onCambiarIdioma(idioma: string): void {
    if (idioma === 'esp') {
      this.cookieService.set('zooftLang', 'esp', 1);
      this.lenguajeServicio.lenguaje(idioma);
    } else {
      this.cookieService.set('zooftLang', 'eng', 1);
      this.lenguajeServicio.lenguaje(idioma);
    }
  }

  onBtnLanguage(): void {
    document.querySelector('#language').classList.toggle('active-language');
  }
}
