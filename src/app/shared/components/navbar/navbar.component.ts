import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public options: Array<{ description: string, icon: string}> = [
    {
      description: 'Ir al inicio',
      icon: 'uil uil-estate'
    },
    {
      description: 'Ir a chats',
      icon: 'uil uil-chat'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
