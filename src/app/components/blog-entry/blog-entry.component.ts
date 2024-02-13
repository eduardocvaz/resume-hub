import {Component, Input} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Post} from "./model/post.model";

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.css']
})
export class BlogEntryComponent {
  @Input() post: Post | undefined;
  apiUrl = environment.apiUrl;
  blogUrl = environment.blogUrl;
}
