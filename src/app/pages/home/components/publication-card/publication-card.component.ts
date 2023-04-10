import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.scss']
})
export class PublicationCardComponent implements OnInit {
  public options: Array<{ icon: string, name: string }> = [
    {
      icon: 'uil uil-thumbs-up pe-2',
      name: 'Me gusta'
    },
    {
      icon: 'uil uil-comment-alt-lines pe-2',
      name: 'Comentar'
    },
    {
      icon: 'uil uil-share pe-2',
      name: 'Compartir'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
