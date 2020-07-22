import { Component, OnInit } from '@angular/core';
import{Producto} from './producto';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Producto[]=[
    {idproducto:1,nombre:"Detergente Opal",precio:12,cantidad:10},{idproducto:2,nombre:"Cepillo Oral-B",precio:13,cantidad:4},
    {idproducto:3,nombre:"Alo",precio:7,cantidad:2},{idproducto:4,nombre:"dale",precio:15,cantidad:11}]

  constructor() { }

  ngOnInit(): void {
  }

}
