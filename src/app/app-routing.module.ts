import { ServiceComponent } from './service/service.component';
import { AddstComponent } from './addst/addst.component';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ListuserComponent } from './listuser/listuser.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UpdatestComponent } from './updatest/updatest.component';
import { ListproductComponent } from './listproduct/listproduct.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
{path:'login', component:LoginComponent},
{path:'products', component:ListproductComponent},
{path:'service', component:ServiceComponent},
{path:'st', component:StudentComponent,
children:[
  {path:"add", component:AddstComponent},
  {path:"update", component:UpdatestComponent},
]
},
  {path:'list', component:ListuserComponent },
  {path:'product/:id', component:ProductComponent },
  {path:'home', component: HomeComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
