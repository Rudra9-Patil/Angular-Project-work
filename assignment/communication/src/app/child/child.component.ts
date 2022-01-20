import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Output() greet:EventEmitter<string>=new EventEmitter<string>()

sendWish(){
  this.greet.emit('Hello Good Morning')
}
  constructor() { }

  ngOnInit(): void {

  }

}
