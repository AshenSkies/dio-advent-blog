import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.css']
})
export class FeaturedPostComponent {
	@Input()
	articleImage:string = 'https://images.pexels.com/photos/18029411/pexels-photo-18029411/free-photo-of-blossoms-on-spring-trees-around-alley-in-town.jpeg'
	@Input()
	articleTitle:string = 'Is it spring now?'
	@Input()
	articleBrief:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	@Input()
	Id:string = '0'
}
