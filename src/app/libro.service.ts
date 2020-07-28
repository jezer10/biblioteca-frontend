import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from './libros/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private url='http://localhost:8086/libro';
  constructor(private http:HttpClient) { }
  getListarLibros(){
    return this.http.get<Libro[]>(this.url+'/all');
  }
}
