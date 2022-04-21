import { Component, OnInit } from '@angular/core';
import { Book, BOOKS } from 'src/app/types/interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  books = BOOKS;
  selectedBook?: Book;


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

}
