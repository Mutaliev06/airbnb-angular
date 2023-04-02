import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { BuildService, CardClass } from "../../../service";

@Component({
  selector: 'app-select-guests',
  templateUrl: './select-guests.component.html',
  styleUrls: ['./select-guests.component.css']
})
export class SelectGuestsComponent implements OnInit {
  housing: CardClass[];
  guestArray: number[];

  @Input()
  guests?: number

  constructor(
    private buildService: BuildService,
    private route: ActivatedRoute,
  ) {
    this.housing = [];
    this.guestArray = [];
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (this.guests) {
      this.guestArray = Array.from({ length: this.guests }, (v, i) =>  i + 1);
    }
  }
}
