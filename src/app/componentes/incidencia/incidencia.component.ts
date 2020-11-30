import { Incidencia } from './../../modelo/incidencia.model';
import { UsuarioServicio } from './../../Servicios/usuario.service';
import { Component, OnInit } from '@angular/core';
import { AnimalServicio } from 'src/app/Servicios/animal.service';
import { CookieService } from 'ngx-cookie-service';
import { LenguajeServicio } from './../../Servicios/lenguaje.service';
import { Location } from '@angular/common';

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

  constructor(
    private animalServicio: AnimalServicio,
    private cookieService: CookieService,
    private lenguajeServicio: LenguajeServicio,
    private location: Location,
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

  /*   ajax({
      type: 'POST',
      utl: '',
      data: {
      }
    }); */




    console.log('idVisit: ' + this.incidencia.idVisit);
    console.log('IdAnimal: ' + this.incidencia.idAnimal);
    console.log('IdZona: ' + this.incidencia.idZona);
    console.log('Incidencia: ' + this.incidencia.mainIncidencia);
    console.log('SubIncidencia: ' + this.incidencia.subIncidencia);
    console.log('lugarIncidencia: ' + this.incidencia.lugarIncidencia);


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
