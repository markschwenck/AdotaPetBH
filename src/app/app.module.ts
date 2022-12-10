import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { HomeComponent } from './componets/pages/home/home.component';
import { AboutComponent } from './componets/pages/about/about.component';
import { FAQComponent } from './componets/pages/faq/faq.component';
import { DonateComponent } from './componets/pages/donate/donate.component';
import { AdoptComponent } from './componets/pages/adopt/adopt.component';
import { ModalLoginComponent } from './componets/modal-login/modal-login.component';
import { ModalSignUpComponent } from './componets/modal-sign-up/modal-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    FAQComponent,
    DonateComponent,
    AdoptComponent,
    ModalLoginComponent,
    ModalSignUpComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
