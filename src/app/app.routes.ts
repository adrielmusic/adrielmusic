import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'careers', component: CareersComponent},
    {path: 'shop', component: ShopComponent},
    {path: '**', redirectTo:'/home', pathMatch:'full'}
];
