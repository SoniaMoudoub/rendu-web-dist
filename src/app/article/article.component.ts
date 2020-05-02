import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    articles:any
    article= new Article();
    
  constructor(private articleService: ArticleService) {
  }
  ngOnInit() :void{
    this.articleService.getArticles().subscribe(
     data => {
      this.articles = JSON.parse(JSON.stringify(data))
     } ,err=>{
       if(err.status == 500 || err.status == 404){
         alert("Service customers not reachable")
       }
     }
    )

  }

  addArticle() {

    console.log(this.article)

    this.articleService.addArticle(this.article)
      .subscribe(data => {
        document.location.reload(true);
      })      
  }

}
