import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncateHtmlPipe } from '../../pipes/truncate-html.pipe';
import { BlogService } from '../../services/blog.service';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule,  TruncateHtmlPipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogs: any[] = [];
constructor(public blogService: BlogService,
  public sanitizer: DomSanitizer,
  public global: GlobalService
) {
    this.getBlog()
}

getBlog() {
    this.blogService.getPosts().then((res: any) => {
        this.blogs = res;
    })
}
getImageUrl(blog: any) {
  if (!blog.image) return 'assets/img/no-image.jpg';
  return `${this.global.baseUrl}/api/files/${blog.collectionId}/${blog.id}/${blog.image}`;
}
}
