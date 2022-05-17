import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Book } from 'src/app/types/interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() booklist: Book[] = [];

  @Output() deleteBookEvent = new EventEmitter<number>();

  constructor(public dialog: MatDialog) {}

  openDialog(bookId: number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result){
        this.sendBookEvent(bookId);
      }
    });
  }

  ngOnInit(): void {
  }

  sendBookEvent(bookId?: number) {
    this.deleteBookEvent.emit(bookId);
  }
}
