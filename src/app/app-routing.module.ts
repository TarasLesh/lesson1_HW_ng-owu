import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './components/hello/hello.component';

// {path: 'users', component: AllUsersComponent, resolve: {allUsers: UserResolverService}, children:[
//   {path: ':id/posts', component: AllPostsComponent, resolve: {xxx: PostResolveService}}
// ]}

const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'users', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)},
  {path: 'posts', loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule)},
  {path: 'comments', loadChildren: () => import('./modules/comment/comment.module').then(m => m.CommentModule)},

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
export class AppRoutingModule { }
