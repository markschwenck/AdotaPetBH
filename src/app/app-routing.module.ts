import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./componets/pages/about/about.component";
import { AdoptComponent } from "./componets/pages/adopt/adopt.component";
import { DonateComponent } from "./componets/pages/donate/donate.component";
import { FAQComponent } from "./componets/pages/faq/faq.component";
import { HomeComponent } from "./componets/pages/home/home.component";
import { ModalLogin } from "./componets/modal-login/modal-login.component";
import { ModalSignUp } from "./componets/modal-sign-up/modal-sign-up.component";


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'quemsomos', component: AboutComponent },
    { path: 'queroadotar', component: AdoptComponent },
    { path: 'querodoar', component: DonateComponent },
    { path: 'faq', component: FAQComponent },
    { path: 'modal-login', component: ModalLogin},
    { path: 'modal-sign-up', component: ModalSignUp}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
