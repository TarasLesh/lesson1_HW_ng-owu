import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { CommentComponent } from './components/comment/comment.component';


@NgModule({
  declarations: [AllCommentsComponent, CommentComponent],
  imports: [
    CommonModule,
    CommentRoutingModule
  ]
})
export class CommentModule { }
