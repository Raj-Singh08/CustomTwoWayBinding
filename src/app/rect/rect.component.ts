import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  size = input.required<{width:string,height:string}>();
  @Output() sizeChange = new EventEmitter<{width:string,height:string}>();  //name should be like this only"sizeChange" inputname+Chnage
  //to create two way bindable 

  onReset() {
    this.sizeChange.emit({width:'200',height:'100'});
  }
}
