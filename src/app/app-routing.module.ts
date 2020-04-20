import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './hello/hello.component';
import {AllUsersComponent} from './user-module/components/all-users/all-users.component';
import {UserResolverService} from './user-module/services/user-resolver.service';
import {AllPostsComponent} from './post-module/components/all-posts/all-posts.component';
import {PostResolveService} from './post-module/services/post-resolve.service';

const routes: Routes = [
  {path: '', component: HelloComponent},
  { path: 'users',  loadChildren: () => import('./user-module/user-module.module').then(m => m.UserModuleModule)},
  { path: 'posts',  loadChildren: () => import('./post-module/post-module.module').then(m => m.PostModuleModule)}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
