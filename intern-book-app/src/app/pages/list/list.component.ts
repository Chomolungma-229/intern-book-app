import { Component, OnInit } from '@angular/core';
import { BOOKS } from 'src/app/types/interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  books = BOOKS;

  constructor() { }

  ngOnInit(): void {
  }

}
