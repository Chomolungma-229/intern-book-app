import { Component, OnInit,Input } from '@angular/core';
import { Book, BOOKS } from 'src/app/types/interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() books?: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
