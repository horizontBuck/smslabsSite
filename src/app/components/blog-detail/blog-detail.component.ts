import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
blog: any = null;
constructor(public global: GlobalService,
  public sanitizer: DomSanitizer
) {
}
ngOnInit() {
  this.global.blog$.subscribe((data) => {
    this.blog = data;
  });
}

getImageUrl(blog: any) {
  if (!blog?.image) return 'assets/img/no-image.jpg';
  return `${this.global.baseUrl}/api/files/${blog.collectionId}/${blog.id}/${blog.image}`;
}

}
