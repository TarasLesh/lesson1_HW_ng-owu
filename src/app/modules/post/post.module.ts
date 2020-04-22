import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {PostComponent} from './components/post/post.component';


@NgModule({
  declarations: [
    AllPostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
