import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'doctors', component: DoctorsComponent},
  { path: 'pharmacy', component: PharmacyComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: UserLoginComponent, data: { ['hideFooter']: true } },
  { path: 'signup', component: UserSignupComponent, data: { ['hideFooter']: true } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
