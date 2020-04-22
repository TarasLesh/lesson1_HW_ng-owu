import {Component, Input, OnInit} from '@angular/core';
import {CommentModel} from '../../../../../models/CommentModel';
import {PostService} from '../../../post/services/post.service';
import {PostModel} from '../../../../../models/PostModel';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: CommentModel;
  post: PostModel;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
  }

  showPostOfComment(comment: CommentModel) {
    this.postService.getPost(comment.id).subscribe(value => this.post = value);
  }
}
