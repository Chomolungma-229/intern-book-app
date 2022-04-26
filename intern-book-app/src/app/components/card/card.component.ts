import { Component, OnInit,Input } from '@angular/core';
import { Book } from 'src/app/types/interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() booklist: Book[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
