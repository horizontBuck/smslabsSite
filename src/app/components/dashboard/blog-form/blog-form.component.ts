import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogService } from '../../../services/blog.service';
import Swal from 'sweetalert2';
import { QuillModule } from 'ngx-quill';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-blog-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, QuillModule],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css'
})
export class BlogFormComponent {
  modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],        // toggled buttons
      [{ 'header': 1 }, { 'header': 2 }],     // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }], // outdent/indent
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'align': [] }],
      ['clean']                                         // remove formatting button
    ]
  };
  blogForm!: FormGroup;
  
  constructor(public fb: FormBuilder, 
    public blogService: BlogService,
    public http: HttpClient
  ) {
      
    }

  ngOnInit(): void {
    this.blogForm = this.fb.group({
        title: ['', Validators.required],
        image: [null], // opcional
        content: ['', Validators.required]
      });
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.blogForm.patchValue({ image: file });
    }
  }
  
  async onSubmit() {
    if (this.blogForm.invalid) return;

    try {
      const formData = new FormData();
      formData.append('title', this.blogForm.value.title!);
      formData.append('content', this.blogForm.value.content!);

      // Si hay imagen (futuro input tipo file)
      if (this.blogForm.value.image) {
        formData.append('image', this.blogForm.value.image);
      }

      await this.blogService.createPost(formData);
      Swal.fire('Éxito', 'Entrada creada correctamente', 'success');
      this.blogForm.reset();
      
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'No se pudo crear la entrada', 'error');
    }
  }


}

