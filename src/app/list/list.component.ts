import { Component, OnInit } from '@angular/core';
import { LibroService } from '../libro.service';
import { Router } from '@angular/router';
import { Libro } from '../libros/libro';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  libros:Libro[];
  constructor(private libroService:LibroService, private router:Router) { }

  ngOnInit(): void {
    this.listarLibros();
  }
  listarLibros(){
    this.libroService.getListarLibros().subscribe(data=>{
      this.libros=data;
    });
  }
}
