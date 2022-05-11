import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/types/interface';

export const BOOKS: Book[] = [
  {
      name: '斜陽',
      detail: '人間は、恋と革命のために生まれてきたのだ。',
      evaluation: 80
  },
  {
      name: '※追加された本※',
      detail: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      evaluation: 0
  }
]

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  books = BOOKS;
  bookObj : Book = {
    name : '',
    detail : '',
    evaluation : 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  addBook() {
    this.books.push(
      {
      name: this.bookObj.name,
      detail: this.bookObj.detail,
      evaluation: this.bookObj.evaluation
      }
    )
  }

  deleteBook(bookId: number) {
    this.books.splice(bookId,1);
  }
}
