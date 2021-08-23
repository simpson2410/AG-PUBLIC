import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { HomeComponent } from './_components/home/home.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { BoardAdminComponent } from './_components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './_components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './_components/board-user/board-user.component';

import { AuthInterceptorProviders } from './_helpers/auth.interceptor';
import { HeaderComponent } from './Components/Pages/header/header.component';
import { FooterComponent } from './Components/Pages/footer/footer.component';
import { MainComponent } from './Components/Pages/main/main.component';
import { PcityComponent } from './Components/Products/pcity/pcity.component';
import { MguserComponent } from './_components/mguser/mguser.component';
import { ScrollToTopComponent } from './Components/Pages/scroll-to-top/scroll-to-top.component';
import { AddProductComponent } from './Components/Functions/Add/add-product/add-product.component';
import { ListProductComponent } from './Components/Functions/List/list-product/list-product.component';
import { EditProductComponent } from './Components/Functions/Edit/edit-product/edit-product.component';
import { AddBrandComponent } from './Components/Functions/Add/add-brand/add-brand.component';
import { ListBrandComponent } from './Components/Functions/List/list-brand/list-brand.component';
import { EditBrandComponent } from './Components/Functions/Edit/edit-brand/edit-brand.component';
import { AddPtypeComponent } from './Components/Functions/Add/add-ptype/add-ptype.component';
import { EditPtypeComponent } from './Components/Functions/Edit/edit-ptype/edit-ptype.component';
import { ListPtypeComponent } from './Components/Functions/List/list-ptype/list-ptype.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceComponent } from './Components/Products/device/device.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContactComponent } from './Components/Pages/contact/contact.component';
import { NewsComponent } from './Components/Pages/news/news.component';

import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './_components/Manager-User/add-user/add-user.component';
import { EditUserComponent } from './_components/Manager-User/edit-user/edit-user.component';
import { ListUserComponent } from './_components/Manager-User/list-user/list-user.component';
import { ProductDetailComponent } from './Components/Products/product-detail/product-detail.component';
import { CartComponent } from './Components/Pages/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PcityComponent,
    MguserComponent,
    ScrollToTopComponent,
    AddProductComponent,
    ListProductComponent,
    EditProductComponent,
    AddBrandComponent,
    ListBrandComponent,
    EditBrandComponent,
    AddPtypeComponent,
    EditPtypeComponent,
    ListPtypeComponent,
    DeviceComponent,
    ContactComponent,
    NewsComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    ProductDetailComponent,
    CartComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgSelectModule,
    FormsModule,
  ],
  providers: [ AuthInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
