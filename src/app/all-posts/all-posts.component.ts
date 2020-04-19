import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PostModel} from '../../models/PostModel';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: PostModel[];

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {

    this.activatedRoute.params.subscribe(params =>
      this.postService.getPostsOfUserById(params.id).subscribe(postsFromServer => this.posts = postsFromServer)
    );

    // this.activatedRoute.queryParams.subscribe(queryParams =>
    //   this.postService.getPostsOfUserById(queryParams.idOfUser).subscribe(value => console.log('11', value))
    // );

    // this.postService.getPostsOfUserById(this.router.getCurrentNavigation().extras.state.user.id)
    //   .subscribe(value => console.log('33', value)
    //   );

  }

  ngOnInit(): void {
  }

}
