import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../models/UserModel';
import {UserService} from '../../services/user/user.service';
import {PostModel} from '../../models/PostModel';
import {PostService} from '../../services/post/post.service';
import {CommentService} from '../../services/comment/comment.service';
import {CommentModel} from '../../models/CommentModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-owu';
  msg = 'users';
  users: UserModel[] = [];



  constructor(private userService: UserService, private postServise: PostService, private commentService: CommentService) {
    this.userService.getUsers().subscribe(users => {
      this.postServise.getPosts().subscribe(posts => {
        this.commentService.getComment().subscribe(comments => {
          for (const user of users) {
            user.posts = [];
            for (const post of posts) {
              if (post.userId === user.id) {
                user.posts.push(post);
                post.comments = [];
                for (const comment of comments) {
                  if (comment.postId === post.id) {
                    post.comments.push(comment);
                  }
                }
              }
            }
            this.users.push(user);
          }
          console.log(this.users);

        });

      } );

    });

  }
}
