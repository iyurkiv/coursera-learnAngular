import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProvidersComponent } from './providers/providers.component';
import { AboutComponent } from './about/about.component';
import { AddProvidersComponent } from './providers/add-providers/add-providers.component';
import { EditProvidersComponent } from './providers/edit-providers/edit-providers.component';
import { DetailsProvidersComponent } from './providers/details-providers/details-providers.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"providers", component:ProvidersComponent},
  {path:"providers/add-provider-form", component:AddProvidersComponent},
  {path:"providers/edit/:id", component:EditProvidersComponent},
  {path:"providers/delete/:id", component:EditProvidersComponent},
  {path:"providers/details/:id", component:DetailsProvidersComponent},
  {path:"**", component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
