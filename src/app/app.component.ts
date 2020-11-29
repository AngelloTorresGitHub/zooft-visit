import { UsuarioServicio } from './Servicios/usuario.service';
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'zooft-app';
  private cookieUser: boolean;

  constructor(
    private cookieService: CookieService,
    private usuarioServicio: UsuarioServicio
  ) {}

  public ngOnInit(): void {
    this.cookieUser = this.cookieService.check('zooftVisitNum');

    if (!this.cookieUser) {
      alert(
        'Esta aplicación web utiliza cookies propias para mejorar la experiencia del usuario.\n\n\n This web application uses its own cookies to improve the user experience.'
      );
      this.cookieService.set(
        'zooftVisitNum',
        this.usuarioServicio.getCodVisit(),
        1
      );
      this.usuarioServicio.getCodVisit();
      this.cookieService.set('zooftDark', 'false', 1);
      this.cookieService.set('zooftLang', 'esp', 1);
    }

    this.verificarCookie();
    this.verificarLenguaje();
  }

  verificarCookie() {
    // Verifica la cookie de modo oscuro
    if (this.cookieService.get('zooftDark') === 'true') {
      document.body.classList.add('dark');
      document.querySelector('#switch').classList.add('active');
    } else {
      document.body.classList.remove('dark');
      document.querySelector('#switch').classList.remove('active');
    }
  }

  verificarLenguaje() {
    // Verifica el lenguaje de la app web
    if (this.cookieService.get('zooftLang') === 'esp') {
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
