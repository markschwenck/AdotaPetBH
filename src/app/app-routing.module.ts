import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./componets/pages/about/about.component";
import { AdoptComponent } from "./componets/pages/adopt/adopt.component";
import { DonateComponent } from "./componets/pages/donate/donate.component";
import { FAQComponent } from "./componets/pages/faq/faq.component";
import { HomeComponent } from "./componets/pages/home/home.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'quemsomos', component: AboutComponent },
    { path: 'queroadotar', component: AdoptComponent },
    { path: 'querodoar', component: DonateComponent },
    { path: 'faq', component: FAQComponent },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}