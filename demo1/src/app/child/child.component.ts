import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Output() message:EventEmitter<string>=new EventEmitter<string>()
@Output() greet:EventEmitter<string>=new EventEmitter<string>()

sendData(){
   this.message.emit('passing data from child')
 }

 sendWish(){
   this.greet.emit('Hello Good Morning')
 }
  constructor() { }

  ngOnInit(): void {
  }

}
