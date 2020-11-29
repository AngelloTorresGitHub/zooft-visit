import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.sass']
})
export class PieComponent implements OnInit {

  ruta: string;

  constructor() { }

  ngOnInit(): void {
  }

  onUp() {
    scroll(0, 0);
  }
}

