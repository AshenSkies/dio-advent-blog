import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/data/articleData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
	articleTitle:string = "Article Title"
	articleImage:string = "https://images.pexels.com/photos/4126684/pexels-photo-4126684.jpeg"
	articleDate:string = "30.04.2034"
	articleContent:string = 'Sed interdum arcu a nisi convallis, vel tincidunt enim pulvinar. Quisque et mi pellentesque, posuere sapien at, sollicitudin massa. Nam tincidunt ornare felis et porta. Maecenas luctus in lorem non molestie. In hac habitasse platea dictumst. Praesent at urna non nisl venenatis sagittis non a neque. Sed placerat, sem eget iaculis varius, nisi nunc sagittis libero, a imperdiet urna nibh eget purus. Proin a aliquam diam. Integer maximus quis urna et accumsan. Mauris ultrices malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras fermentum mollis lacus at auctor. Etiam pretium dui a leo euismod, sit amet porta ex pharetra. Ut egestas porttitor nunc. Etiam suscipit nisi nisi, nec ullamcorper nulla tempus nec. Aliquam erat volutpat. Morbi consequat velit nec neque pharetra tristique. Etiam sit amet tortor blandit lorem vehicula ornare sit amet in leo. Aliquam urna mi, porta at est vitae, lacinia dapibus felis. Ut mi augue, fringilla nec varius sed, aliquam a eros. Mauris diam enim, aliquet sed quam ac, finibus consectetur urna. Nunc ultrices ligula vel nisl ultrices, vel efficitur augue pulvinar. Maecenas vulputate lacinia ligula ac scelerisque. Phasellus ac nulla sollicitudin, hendrerit justo accumsan, malesuada leo. Pellentesque et massa eget mauris vehicula rhoncus scelerisque non turpis.'
	articleTags:Array<string> = ['nature']
	articleAuthor:string = "Uncredited"
	private id:string|null = "0"

	constructor(private route:ActivatedRoute) {

	}

	ngOnInit():void {
		this.route.paramMap.subscribe( value => this.id = value.get("id"))
		this.loadArticle(this.id)
	}

	loadArticle(id:string|null){
		const res = data.filter(article => article.id.toString() == id)[0]

		this.articleTitle = res.title
		this.articleImage = res.image
		this.articleDate = res.date
		this.articleContent = res.content
		this.articleTags = res.tags
		this.articleAuthor = res.author
	}

}
