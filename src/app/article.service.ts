import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Article} from './article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private host:string="http://localhost:8181/"
  private articlesUrl:string= this.host+"articles/"
  article:Article;
  constructor(private http:HttpClient) { }

  getArticles(){
    return this.http.get(this.articlesUrl)
  }
  addArticle(article){
    const headers = { 'content-type': 'application/json'}  
    console.log(article)
    return this.http.post(this.articlesUrl, article,{'headers':headers})
  }

}