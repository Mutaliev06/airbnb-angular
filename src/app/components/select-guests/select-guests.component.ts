import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { BuildService, CardClass } from "../../../service";

@Component({
  selector: 'app-select-guests',
  templateUrl: './select-guests.component.html',
  styleUrls: ['./select-guests.component.css']
})
export class SelectGuestsComponent implements OnInit {
  housing: CardClass[];
  guestArray: any[];

  constructor(
    private buildService: BuildService,
    private route: ActivatedRoute,
  ) {
    this.housing = [];
    this.guestArray = [];
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const newBuildingArr = this.buildService.getNewBuildingArr(Number(id));

    this.guestArray = Array.from({ length: newBuildingArr.guests }, (v, i) =>  i + 1);
  }
}
