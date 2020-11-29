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
  idVisit = '';
  IdAnimal = '';
  IdZona = '';
  ruta = '';

  tipoIncidencia = '0';
  tipoBasura = '0';
  tipoInfraestructura = '0';
  tipoAnimal = '0';
  tipoVisitante = '0';
  basuraPublico = '0';
  basuraDesechos = '0';


  constructor(
    private animalServicio: AnimalServicio,
    private cookieService: CookieService,
    private lenguajeServicio: LenguajeServicio,
    private usuarioServicio: UsuarioServicio,
    private location: Location,
  ) {
    this.ruta = this.animalServicio.getAnimalService().ruta;
    this.idVisit = this.usuarioServicio.getCodVisit();
    this.IdAnimal = this.animalServicio.getAnimalService().cod;
    this.IdZona = this.animalServicio.getAnimalService().zona;
  }

  ngOnInit(): void {
    this.lenguajeServicio.lenguaje(this.cookieService.get('zooftLang'));
  }

  onEnviarIncidencia(): void {

  /*   ajax({
      type: 'POST',
      utl: '',
      data: {
      }
    }); */

    /* Cambiar los nombres a los input */

    console.log('idVisit: ' + this.usuarioServicio.getCodVisit());
    console.log('IdAnimal: ' + this.animalServicio.getAnimalService().cod);
    console.log('IdZona: ' + this.animalServicio.getAnimalService().zona);


    if (this.cookieService.get('zooftLang') === 'esp') {
      alert('Incidencia enviada, gracias por tu colaboración.');
    } else {
      alert('Incident sent, thank you for your collaboration.');
    }

    this.location.back();
  }
}
