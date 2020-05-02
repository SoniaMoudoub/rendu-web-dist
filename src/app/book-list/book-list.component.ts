import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Book } from '../books';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
 books:any
 //customer:Customer;
book= new Book();
    
  constructor(private bookService: BookService) {
  }
  ngOnInit() :void{
    this.bookService.getBooks().subscribe(
     data => {
      this.books = JSON.parse(JSON.stringify(data))
     } ,err=>{
       if(err.status == 500 || err.status == 404){
         alert("Service books not reachable")
       }
     }
    )

  }

  addBook() {
    console.log(this.book)
    this.bookService.addBook(this.book)
      .subscribe(data => {
        document.location.reload(true);
      })      
  }


      
  


}

