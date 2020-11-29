import { Injectable } from '@angular/core';

@Injectable()
export class LenguajeServicio {
  lenguaje(idioma) {
    if (idioma === 'esp') {
      document.querySelector('.esp').classList.remove('hidden');
      document.querySelector('.eng').classList.add('hidden');
      document.querySelector('#btn-esp').classList.add('hidden');
      document.querySelector('#btn-eng').classList.remove('hidden');
      document.querySelector('#language').classList.remove('active-language');
    } else {
      document.querySelector('.esp').classList.add('hidden');
      document.querySelector('.eng').classList.remove('hidden');
      document.querySelector('#btn-esp').classList.remove('hidden');
      document.querySelector('#btn-eng').classList.add('hidden');
      document.querySelector('#language').classList.remove('active-language');
    }
  }
}
