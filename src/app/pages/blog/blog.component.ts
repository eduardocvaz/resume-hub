import {Component, OnInit} from '@angular/core';
import {ApiResponse, Post} from "../../components/blog-entry/model/post.model";
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  posts: Post[] = [];

  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.postService.getPosts().subscribe((responses: ApiResponse) => {
      this.posts = responses.data;
      console.log(this.posts);
    });

  }

}
