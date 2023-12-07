import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="https://localhost:7173/api/Books"
  private booksSub=new Subject()
  
  constructor(private http:HttpClient) { 
   this.loadBooks()
  }

  loadBooks(){
    this.http.get(this.url).subscribe(
      (res)=>this.booksSub.next(res)
    )

  }

  getBooks(){
    return this.booksSub
  }

  // CRUD

  postBook(book:any){
    this.http.post(this.url,book).subscribe(
      {
        next:()=>this.loadBooks(),
        error:(err)=>console.log("HIba a könyv felvételénél: ",err)
      }
    )
  }

  putBook(book:any){
    this.http.put(this.url+'/'+book.id,book).subscribe(
      ()=>this.loadBooks()
    )
  }

  deleteBook(book:any){
    this.http.delete(this.url+"/"+book.id).subscribe(
      ()=>this.loadBooks()
    )
  }

}
