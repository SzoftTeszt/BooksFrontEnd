import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
  books:any
  newBook:any={}
  kif=""
  oszlopok=["title", "description", "author"]

  constructor(private base:BaseService){
    this.base.getBooks().subscribe(
      (res)=>this.books=res
    )
  }

  postBook(){
    this.base.postBook(this.newBook)
    this.newBook={}
  }

  putBook(book:any){
    this.base.putBook(book)
  }

  deleteBook(book:any){
    this.base.deleteBook(book)
  }

}
