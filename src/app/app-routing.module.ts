import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CustomerComponent } from './customer/customer.component';
import { ArticleComponent } from './article/article.component';
import { ReviewComponent } from './review/review.component';
import { publishinghouseComponent } from './publishinghouse/publishinghouse.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {path:'customers', component: CustomerComponent },
  {path:'books', component: BookListComponent },
  {path:'articles', component: ArticleComponent },
  {path:'reviews', component: ReviewComponent },
  {path:'publishinghouses', component: publishinghouseComponent},
  {path:'persons', component: PersonComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[CustomerComponent , BookListComponent, ArticleComponent,ReviewComponent, publishinghouseComponent, PersonComponent ]