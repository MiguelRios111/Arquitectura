import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';

import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

import {DriversComponent} from './components/drivers/drivers.component';
import {PrivateComponent} from './components/private/private.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';

import {RegistryComponent} from './components/registry/registry.component';

import {Route1Component} from './components/route1/route1.component';

const routes: Routes = [

{path:'',component:HomeComponent},

{path:'login',component:LoginComponent},
{path:'registry',component:RegistryComponent},
{path:'register',component:RegisterComponent},
{path:'private',component:PrivateComponent},
{path:'route',component:Route1Component},
{path:'drivers',component:DriversComponent},

{path:'**',component:NotFoundPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
