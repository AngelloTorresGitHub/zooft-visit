import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoboGrisComponent } from './componentes/animales/lobo-gris/lobo-gris.component';
import { IncidenciaComponent } from './componentes/incidencia/incidencia.component';
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

const routes: Routes = [
  { path: 'incidencia', component: IncidenciaComponent },
  { path: 'animal/loboGris', component: LoboGrisComponent },
  { path: 'animal/linceIberico', component: LinceIbericoComponent },
  { path: 'animal/pandaGigante', component: PandaGiganteComponent },
  { path: 'animal/bisonteEuropeo', component: BisonteEuropeoComponent },
  { path: 'animal/osoHormiguero', component: OsoHormigueroComponent },
  { path: 'animal/tapirAmazonico', component: TapirAmazonicoComponent },
  { path: 'animal/tigreBengala', component: TigreBengalaComponent },
  { path: 'animal/pinguinoJackass', component: PinguinoJackassComponent },
  { path: 'animal/tiburonToro', component: TiburonToroComponent },
  { path: 'animal/ibisSagrado', component: IbisSagradoComponent },
  { path: 'animal/loroArcoiris', component: LoroArcoirisComponent },
  { path: 'animal/guacamayoRojo', component: GuacamayoRojoComponent },
  { path: 'animal/nutriaAmazonas', component: NutriaAmazonasComponent },
  { path: 'animal/rinoceronteBlanco', component: RinoceronteBlancoComponent },
  { path: 'quienesSomos', component: QuienesSomosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
