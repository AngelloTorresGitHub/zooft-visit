import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

/* Componentes Principales */
import { MenuComponent } from './componentes/menu/menu.component';
import { IncidenciaComponent } from './componentes/incidencia/incidencia.component';
import { PieComponent } from './componentes/pie/pie.component';

/* Servicios */
import { AnimalServicio } from './Servicios/animal.service';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioServicio } from './Servicios/usuario.service';
import { LenguajeServicio } from './Servicios/lenguaje.service';
import { HttpService } from './Servicios/http.service';

/* Componentes Animales */
import { LoboGrisComponent } from './componentes/animales/lobo-gris/lobo-gris.component';
import { LinceIbericoComponent } from './componentes/animales/lince-iberico/lince-iberico.component';
import { PandaGiganteComponent } from './componentes/animales/panda-gigante/panda-gigante.component';
import { BisonteEuropeoComponent } from './componentes/animales/bisonte-europeo/bisonte-europeo.component';
import { OsoHormigueroComponent } from './componentes/animales/oso-hormiguero/oso-hormiguero.component';
import { TapirAmazonicoComponent } from './componentes/animales/tapir-amazonico/tapir-amazonico.component';
import { TigreBengalaComponent } from './componentes/animales/tigre-bengala/tigre-bengala.component';
import { PinguinoJackassComponent } from './componentes/animales/pinguino-jackass/pinguino-jackass.component';
import { TiburonToroComponent } from './componentes/animales/tiburon-toro/tiburon-toro.component';
import { IbisSagradoComponent } from './componentes/animales/ibis-sagrado/ibis-sagrado.component';
import { LoroArcoirisComponent } from './componentes/animales/loro-arcoiris/loro-arcoiris.component';
import { GuacamayoRojoComponent } from './componentes/animales/guacamayo-rojo/guacamayo-rojo.component';
import { NutriaAmazonasComponent } from './componentes/animales/nutria-amazonas/nutria-amazonas.component';
import { RinoceronteBlancoComponent } from './componentes/animales/rinoceronte-blanco/rinoceronte-blanco.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IncidenciaComponent,
    LoboGrisComponent,
    LinceIbericoComponent,
    PieComponent,
    PandaGiganteComponent,
    BisonteEuropeoComponent,
    OsoHormigueroComponent,
    TapirAmazonicoComponent,
    TigreBengalaComponent,
    PinguinoJackassComponent,
    TiburonToroComponent,
    IbisSagradoComponent,
    LoroArcoirisComponent,
    GuacamayoRojoComponent,
    NutriaAmazonasComponent,
    RinoceronteBlancoComponent,
    QuienesSomosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firestone, 'zooft'),
    AngularFireModule,
    AngularFireAuthModule,
  ],
  providers: [
    AnimalServicio,
    CookieService,
    UsuarioServicio,
    LenguajeServicio,
    HttpService,
    { provide: SETTINGS, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
