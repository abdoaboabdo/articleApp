import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleServiceService } from '../article-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  //title:string;
  article:Article=new Article(0,'','');
  articles:Article[];
  article_id:number;
  pagination:object={};
  edit:boolean=false;
  page_url='http://article.abdoaboabdo12323.dx.am/local/puplic/api/articles';
  constructor(public artSer:ArticleServiceService) { 
    //this.created();
  }

  ngOnInit() {
    this.created();
  }
  created():void{
    this.fetchArticles();
  }
  fetchArticles(page_url=this.page_url){
    if(page_url!=null){
      let vm=this;
      
      this.artSer.getall(page_url).subscribe(
        res=>{
          
          this.articles=res.json().data;
          vm.makePagination(res.json().meta,res.json().links);
        }
      );
    }
    
  }
  makePagination(meta,links){
    let pagination={
        current_page    :meta.current_page,
        last_page       :meta.last_page,
        next_page_url   :links.next,
        prev_link_url   :links.prev
    }
    this.pagination=pagination;
  }
  editArticle(article){
    this.edit=true;
    this.article.id=article.id;
    this.article_id=article.id;
    this.article.title=article.title;
    this.article.body=article.body;
  }
  addArticle(){
    if(this.edit==false){
      this.artSer.postArticle(this.article).subscribe(
        res=>{
          this.article.id=0;
          this.article.title='';
          this.article.body='';
          alert('Article Added ');
          this.fetchArticles();
        }
      );
    }else{
      this.artSer.edit(this.article).subscribe(
        res=>{
          this.article.id=0;
          this.article.title='';
          this.article.body='';
          this.article_id=0;
          alert('Article Edited ');
          this.edit=false;
          this.fetchArticles();
        }
      );
    }
  }
  deleteArticle(id:number){
    if(confirm('Are you sure')){
      this.artSer.delete(id).subscribe(
        res=>{
          alert('Article Deleted');
          this.fetchArticles();
        }
      )
    }
  }

}
