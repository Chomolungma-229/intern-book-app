import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/types/interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() booklist: Book[] = [];

  @Output() deleteBookEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  sendBookEvent(bookId: number) {
    this.deleteBookEvent.emit(bookId);
  }



}
