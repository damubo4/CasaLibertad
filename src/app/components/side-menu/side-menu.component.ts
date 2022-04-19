import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  menuShow = 1;
  menuText = "Ocultar menú";

  navigate = [
    {link: "ayuda", title: "Ayuda"},
    {link: "administracion", title: "Administración"},
    {link: "recepcion", title: "Recepción"},
    {link: "acogida", title: "Acogida"},
    {link: "articulacion", title: "Articulación"},
    {link: "dimension", title: "Dimensión"},
    {link: "agenda", title: "Agenda"},
    {link: "consulta", title: "Consulta"},
    {link: "reportes", title: "Reportes"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  mostrarMenu() {
    if (this.menuShow == 0) {
      this.menuShow = 1;
      this.menuText = "Ocultar menú";
    } else if (this.menuShow == 1) {
      this.menuShow = 0;
      this.menuText = "Mostrar menú";
    }
  }
}
