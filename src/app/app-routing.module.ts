import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DescriptionModalComponent
} from "./components/description-modal/description-modal.component";
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'description/:id', component: DescriptionModalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
