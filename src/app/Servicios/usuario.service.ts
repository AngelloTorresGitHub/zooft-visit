import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioServicio {

  date = new Date();
  anyo: string;
  mes: string;
  dia: string;
  hora: string;
  min: string;
  seg: string;
  diaSemana: string;
  dateUser: string;
  codVisit: string;

  getCodVisit() {
    this.anyo = this.date.getFullYear().toString();
    this.hora = this.date.getHours().toString();
    this.min = this.date.getMinutes().toString();
    this.seg = this.date.getSeconds().toString();

    if (((this.date.getMonth()) + 1) < 10) {
      this.mes = '0' + ((this.date.getMonth()) + 1).toString();
    } else {
      this.mes = ((this.date.getMonth()) + 1).toString();
    }

    if (this.date.getDate() < 10) {
      this.dia = '0' + this.date.getDate().toString();
    } else {
      this.dia = this.date.getDate().toString();
    }

    this.diaSemana = this.convertirDia(this.date.getDay().toString());

    this.codVisit = this.anyo + this.mes + this.dia + this.diaSemana + this.hora + this.min + this.seg;

    return this.codVisit;
  }

  private convertirDia(dia) {
    switch (dia) {
      case '0':
        this.diaSemana = 'D';
        break;
      case '1':
        this.diaSemana = 'L';
        break;
      case '2':
        this.diaSemana = 'M';
        break;
      case '3':
        this.diaSemana = 'X';
        break;
      case '4':
        this.diaSemana = 'J';
        break;
      case '5':
        this.diaSemana = 'V';
        break;
      default:
        this.diaSemana = 'S';
        break;
    }
    return this.diaSemana;
  }
}
