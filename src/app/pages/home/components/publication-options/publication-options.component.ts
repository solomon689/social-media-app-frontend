import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication-options',
  templateUrl: './publication-options.component.html',
  styleUrls: ['./publication-options.component.scss']
})
export class PublicationOptionsComponent implements OnInit {
  public options: Array<{ name: string, action: string }> = [
    {
      name: 'Editar',
      action: 'editar',
    }, 
    {
      name: 'Eliminar',
      action: 'eliminar'  
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
