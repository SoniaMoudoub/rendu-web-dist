import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Book } from './books';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private host:string="http://localhost:8282/"
  private booksUrl:string= this.host+"books/"
  //customers: Customer[]  = [];
  book:Book;
  constructor(private http:HttpClient) { }

  getBooks(){
    return this.http.get(this.booksUrl)
  }
  addBook(book){
    const headers = { 'content-type': 'application/json'}  
    console.log(book)
    return this.http.post(this.booksUrl, book ,{'headers':headers})
  }
  
}