import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-latest',
  templateUrl: './featured-latest.component.html',
  styleUrls: ['./featured-latest.component.css']
})
export class FeaturedLatestComponent {
	@Input()
	articleTitle:string = "Aenean eleifend tristique arcu eget vestibulum."
	@Input()
	articleDescription:string = "Donec erat metus, pretium sit amet nil vitae, hendrerit efficitur felis. Vivamus vel dapibus arcu. Ut a nisi dolor. Donec mauris turpis, fringilla a luctus id, feugiat et quam. Vivamus at vehicula neque. Vestibulum vitae accumsan risus. Aenean volutpat maximus nibh, at feugiat erat aliquet vel. Maecenas ornare varius facilisis."
	@Input()
	articleImage:string = "https://images.pexels.com/photos/1028223/pexels-photo-1028223.jpeg"
	@Input()
	articleDate:string = "23.04.2024"
	@Input()
	articleTags:Array<string> = ["nature"]
	@Input()
	Id:string = "0"
}
