import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListuserComponent } from './listuser/listuser.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MainproviderComponent } from './mainprovider/mainprovider.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { AddstComponent } from './addst/addst.component';
import { UpdatestComponent } from './updatest/updatest.component';
import { TemplateComponent } from './template/template.component';
import { FormpComponent } from './formp/formp.component';
import { ReactivefComponent } from './reactivef/reactivef.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ServiceComponent } from './service/service.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListuserComponent,
    HomeComponent,
    MainproviderComponent,
    NotfoundComponent,
    LoginComponent,
    ProductComponent,
    StudentComponent,
    AddstComponent,
    UpdatestComponent,
    TemplateComponent,
    FormpComponent,
    ReactivefComponent,
    ParentComponent,
    ChildComponent,
    ServiceComponent,
    ListproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
