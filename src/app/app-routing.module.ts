import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './menu/home.module#HomePageModule'},
  { path: 'statpage/:id', loadChildren: './statpage/home.module#HomePageModule'},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'todo', loadChildren: './todo/home/home.module#HomePageModule' },
  { path: 'new-item', loadChildren: './todo/new-item/new-item.module#NewItemPageModule' },
  { path: 'update-item/:id', loadChildren: './todo/update-item/update-item.module#UpdateItemPageModule' },
  { path: 'statistiques', loadChildren: './stats/home.module#HomePageModule'},
  { path: 'calendrier', loadChildren: () => import('./calendrier/home.module').then( m => m.HomePageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
