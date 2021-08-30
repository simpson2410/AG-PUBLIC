import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './_components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './_components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './_components/board-user/board-user.component';
import { HomeComponent } from './_components/home/home.component';
import { LoginComponent } from './_components/login/login.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { RegisterComponent } from './_components/register/register.component';
import { MguserComponent } from './_components/mguser/mguser.component';


import { FooterComponent } from './Components/Pages/footer/footer.component';
import { HeaderComponent } from './Components/Pages/header/header.component';
import { MainComponent } from './Components/Pages/main/main.component';
import { PcityComponent } from './Components/Products/pcity/pcity.component';

import { AddProductComponent } from './Components/Functions/Add/add-product/add-product.component';
import { ListProductComponent } from './Components/Functions/List/list-product/list-product.component';
import { EditProductComponent } from './Components/Functions/Edit/edit-product/edit-product.component';

import { AddBrandComponent } from './Components/Functions/Add/add-brand/add-brand.component';
import { ListBrandComponent } from './Components/Functions/List/list-brand/list-brand.component';
import { EditBrandComponent } from './Components/Functions/Edit/edit-brand/edit-brand.component';

import { AddPtypeComponent } from './Components/Functions/Add/add-ptype/add-ptype.component';
import { EditPtypeComponent } from './Components/Functions/Edit/edit-ptype/edit-ptype.component';
import { ListPtypeComponent } from './Components/Functions/List/list-ptype/list-ptype.component';

import { DeviceComponent } from './Components/Products/device/device.component';
import { ContactComponent } from './Components/Pages/contact/contact.component';
import { NewsComponent } from './Components/Pages/news/news.component';

import { AddUserComponent } from './_components/Manager-User/add-user/add-user.component';
import { EditUserComponent } from './_components/Manager-User/edit-user/edit-user.component';
import { ListUserComponent } from './_components/Manager-User/list-user/list-user.component';
import { CartComponent } from './Components/Pages/cart/cart.component';
import { ChatboxComponent } from './Components/Pages/chatbox/chatbox.component';
import { AddCartComponent } from './Components/Functions/Add/add-cart/add-cart.component';


const routes: Routes = [
  { path: 'cartadd', component: AddCartComponent},

  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'user', component: BoardUserComponent},
  { path: 'mod', component: BoardModeratorComponent},
  { path: 'admin', component: BoardAdminComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'mguser', component: MguserComponent},
  { path: '', component: MainComponent},
  { path: 'pcity', component: PcityComponent},
  { path: 'device/:_id', component: DeviceComponent},
  { path: 'products-list', component: ListProductComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'brands-list', component: ListBrandComponent },
  { path: 'add-brand', component: AddBrandComponent },
  { path: 'edit-brand/:id', component: EditBrandComponent },
  { path: 'ptypes-list', component: ListPtypeComponent },
  { path: 'add-ptype', component: AddPtypeComponent },
  { path: 'edit-ptype/:id', component: EditPtypeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: NewsComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'users-list', component: ListUserComponent },
  { path: 'cart', component: CartComponent },
  { path: 'chatbox', component: ChatboxComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
