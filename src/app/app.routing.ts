import { NgModule } from '@angular/core';
import { ExtraOptions,Routes, RouterModule} from "@angular/router";
 
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SchoolComponent } from './pages/school/school.component';
import { SchoolsComponent } from './pages/schools/schools.component';

 
const ROUTES: Routes = [
     {path: '', redirectTo: 'Home', pathMatch: 'full'},
     { path: 'Home', component: HomeComponent  },
     { path: 'Schools/:schoolId', component: SchoolComponent  }
 ];

const config: ExtraOptions = {
    useHash: true,
};

  @NgModule({
    imports: [RouterModule.forRoot(ROUTES, config)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {
  }  