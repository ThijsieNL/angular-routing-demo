import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //dit zijn de routes waar je naar kan verwijzen.
  //ik verwijs naar /about op de home page en andersom. hieronder schrijf je dit natuurlijk zonder /
  //je moet ook verwijzen naar het component wat je moet laden
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent //deze moet je wel importeren vanuit de home folder, import errors krijg je automatisch en zijn makkelijk op te lossen
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
[]
