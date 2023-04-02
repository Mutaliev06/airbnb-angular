import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Build, building, BuildService, CardClass} from "../../../service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnChanges {
  building: CardClass[];

  @Input()
  id?: number

  constructor(private buildService: BuildService) {
    this.building = this.buildService.getAllPins();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.id && this.id !== 0) {
      this.building = this.buildService.getBuildingFilter(String(this.id));
    }
  }
}
