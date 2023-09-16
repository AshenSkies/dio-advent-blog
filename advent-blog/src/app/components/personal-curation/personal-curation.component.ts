import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal-curation',
  templateUrl: './personal-curation.component.html',
  styleUrls: ['./personal-curation.component.css']
})
export class PersonalCurationComponent {
	@Input()
	articleImage:string = "https://images.pexels.com/photos/3020210/pexels-photo-3020210.jpeg"
	@Input()
	articleDescription:string = "Donec erat metus, pretium sit amet nil vitae, hendrerit efficitur felis. Vivamus vel dapibus arcu. Ut a nisi dolor. Donec mauris turpis, fringilla a luctus id, feugiat et quam. Vivamus at vehicula neque. Vestibulum vitae accumsan risus. Aenean volutpat maximus nibh, at feugiat erat aliquet vel. Maecenas ornare varius facilisis."
	@Input()
	articleTags:Array<string> = ["history"]
	@Input()
	Id:string = "0"
}
