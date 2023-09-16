import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-article',
  templateUrl: './block-article.component.html',
  styleUrls: ['./block-article.component.css']
})
export class BlockArticleComponent {
	@Input()
	articleDate:string = "02.03.2034"
	@Input()
	articleImage:string = "https://images.pexels.com/photos/17987769/pexels-photo-17987769/free-photo-of-woman-with-red-hair-taking-pictures-of-flowers.jpeg"
	@Input()
	articleTitle:string = "Lorem Ipsum"
	@Input()
	articleTags:Array<string> = ["mythology"]
	@Input()
	Id:string = "0"
}
