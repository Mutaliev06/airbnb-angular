import {Component, Input, OnInit} from '@angular/core';
import {Build, BuildService} from "../../../service";

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.css']
})
export class LeftColumnComponent implements OnInit{

  @Input() clickBuild?: number;

  building: Build[] | any;

  constructor(private buildService: BuildService) {
    this.building = {};
  }

  ngOnInit() {
    if (this.clickBuild !== 0) {
      this.building = this.clickBuild && this.buildService.getBuildingFilter(String(this.clickBuild));
      console.log(this.clickBuild)
    }
    this.building = this.buildService.getNewCardArr();
  }

}
