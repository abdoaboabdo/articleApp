import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Article } from './article';
@Injectable()
export class ArticleServiceService {

  constructor(private http:Http) { }

  getall(page_url){
    return this.http.get(page_url);
  }
  postArticle(article:Article){
    return this.http.post('http://article.abdoaboabdo12323.dx.am/local/puplic/api/article',article);
  }
  edit(article:Article){
    return this.http.put('http://article.abdoaboabdo12323.dx.am/local/puplic/api/article',article)
  }
  delete(id:number){
    return this.http.delete('http://article.abdoaboabdo12323.dx.am/local/puplic/api/article/'+id);
  }
}
