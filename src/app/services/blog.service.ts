import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private pb = new PocketBase('https://db.buckapi.lat:8090');

  constructor() {}

  // Crear un nuevo post
  async createPost(data: any) {
    // Si vas a subir imagen, usar FormData
    return await this.pb.collection('blog').create(data);
  }

  // Listar posts
  async getPosts() {
    return await this.pb.collection('blog').getFullList({
      sort: '-created' // orden descendente por fecha
    });
  }

  // Obtener un post por ID
  async getPostById(id: string) {
    return await this.pb.collection('blog').getOne(id);
  }
}
