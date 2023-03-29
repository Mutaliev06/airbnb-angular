import {Component, Input, OnInit} from '@angular/core';
import { Build, BuildService } from "../../../service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit{
  building: Build[] | any;

  @Input()
  id?: number

  constructor(private buildService: BuildService) {
    this.building = {};
  }

  ngOnInit() {

    if (this.id) {
      this.building = this.id && this.buildService.getBuildingFilter(String(this.id));
    } else {
      this.building = this.buildService.getNewCardArr();
    }

    // this.building = this.buildService.getNewCardArr();
  }
}
