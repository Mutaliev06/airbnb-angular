import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Build, building} from "../../../service";

@Component({
  selector: 'app-right-column',
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.css']
})
export class RightColumnComponent implements OnInit {
  building: Build[];
  id:number = 0;

  // @Output() touchId: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.building = [];
  }

  ngOnInit() {
    this.building = building;
  }

  // public touchMarker (id: number){
  //   this.id = id
  //   this.touchId.emit(this.id);
  // }

  clickCnt:number = 0;
  @Output() clickChange: EventEmitter<number> = new EventEmitter();

  public clickMe(id: number){
    this.clickCnt = id;
    this.clickChange.emit(this.clickCnt);
  }
}
