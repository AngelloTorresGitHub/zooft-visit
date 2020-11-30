import { Incidencia } from './../../modelo/incidencia.model';
import { Component, OnInit } from '@angular/core';
import { AnimalServicio } from 'src/app/Servicios/animal.service';
import { CookieService } from 'ngx-cookie-service';
import { LenguajeServicio } from './../../Servicios/lenguaje.service';
import { Location } from '@angular/common';
import { HttpService } from './../../Servicios/http.service';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.sass'],
})
export class IncidenciaComponent implements OnInit {
  incidencia: Incidencia = {
    idVisit: '0',
    idAnimal: '0',
    idZona: '0',
    mainIncidencia: '',
    subIncidencia: '',
    lugarIncidencia: '',
  };

  ruta = '';
  url = 'http://127.0.0.1:8000/pruebaForm';

  constructor(
    private animalServicio: AnimalServicio,
    private cookieService: CookieService,
    private lenguajeServicio: LenguajeServicio,
    private location: Location,
    private httpService: HttpService,

  ) {
    this.ruta = this.animalServicio.getAnimalService().ruta;
    this.incidencia.idVisit = this.cookieService.get('zooftVisitNum');
    this.incidencia.idAnimal = this.animalServicio.getAnimalService().cod;
    this.incidencia.idZona = this.animalServicio.getAnimalService().zona;
  }

  ngOnInit(): void {
    this.lenguajeServicio.lenguaje(this.cookieService.get('zooftLang'));
    this.ruta = this.animalServicio.getAnimalService().ruta;
  }

  enviarIncidencia(): void {
  /* https://www.techiediaries.com/angular-9-ajax-get-and-post-requests-example/ */
    /* Ruta del serve php en laravel, es provisional Cambiar cuando el proyecto laravel esté en AWS */

    console.log(this.httpService.setPostDatos(this.url, this.incidencia));



  /*   ajax({
      type: 'POST',
      utl: '',
      data: {
      }
    }); */




/*     console.log('idVisit: ' + this.incidencia.idVisit);
    console.log('IdAnimal: ' + this.incidencia.idAnimal);
    console.log('IdZona: ' + this.incidencia.idZona);
    console.log('Incidencia: ' + this.incidencia.mainIncidencia);
    console.log('SubIncidencia: ' + this.incidencia.subIncidencia);
    console.log('lugarIncidencia: ' + this.incidencia.lugarIncidencia); */


    if (this.cookieService.get('zooftLang') === 'esp') {
      alert('Incidencia enviada, gracias por tu colaboración.');
    } else {
      alert('Incident sent, thank you for your collaboration.');
    }

    this.location.back();
  }

  /* AL cambiar el valor del select de mainIncidencias, pone a '' los valores de los demás selects */
  cambio(){
    this.incidencia.subIncidencia = '';
    this.incidencia.lugarIncidencia = '';
  }

  /* AL cambiar el valor del select de subIncidencia, pone a '' el valor del select lugarIncidencia */
  cambioLugar(){
    this.incidencia.lugarIncidencia = '';
  }
}
