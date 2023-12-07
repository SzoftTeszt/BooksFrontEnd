import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kereso'
})
export class KeresoPipe implements PipeTransform {

  transform(books:any, kif:any) {
    if (!books) return null;
    if (!kif) return books;

    return books.filter(
      (book:any)=>{return book.title.toLowerCase().includes(kif.toLowerCase())}
    )

  }

}
