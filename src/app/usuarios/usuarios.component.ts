import { Component, OnInit } from '@angular/core';
import{Usuario} from './usuario';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
usuarios:Usuario[]=[
  {id:1,nomuser:"Jonas",clave:"123"},{id:2,nomuser:"merry",clave:"123"},
  {id:3,nomuser:"cocaina",clave:"123"},{id:4,nomuser:"marijuana",clave:"123"}]
  constructor() { }

  ngOnInit(): void {
  }

}
