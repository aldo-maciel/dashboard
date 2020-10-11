import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@/app/pages/home/home.component';
import { UniqueElementComponent } from '@/app/pages/features/unique-element/unique-element.component';
import { BinaryComponent } from '@/app/pages/features/binary/binary.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'unique-element', component: UniqueElementComponent },
  { path: 'binary', component: BinaryComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
