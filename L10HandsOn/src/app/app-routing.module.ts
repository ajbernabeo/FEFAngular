import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    // you'll need a path for selecting the city
    // you'll need a path for the weather for a specific city
    // for root, add a redirect to the city path
];

// Don't forget your `RouterModule`!

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
