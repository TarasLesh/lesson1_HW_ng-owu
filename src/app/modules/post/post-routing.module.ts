import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {PostResolveService} from './services/post-resolve.service';


const routes: Routes = [
  {path: '', component: AllPostsComponent, resolve: {xxx: PostResolveService}},
  {path: 'posts', component: AllPostsComponent, resolve: {xxx: PostResolveService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
