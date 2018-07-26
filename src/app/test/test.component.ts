import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Huynh Mai Hoang Huy";
  public myId = "myId";
  public isDisabled = false;
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClass = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };
  public messageStyle = {
    "color": this.hasError ? "red" : "green",
    "fontStyle": this.isSpecial ? 'italic' : ""
  };
  public greeting = "Hello, Huy";
  public twoWayBinding = "";
  public isDisplay = true;
  public switchColor = "green";
  public colors = ["red", "blue", "green", "orange"];
  @Input('sendToChildComponent') public receiveDataFromPerant;
  @Output() public childevent = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  onClick($event) {
    console.log($event);
  }

  showLog(value) {
    console.log(value);
  }

  fireSendChildToParent() {
    this.childevent.emit('Send Data from Child Component to Parent Component');
  }

}
