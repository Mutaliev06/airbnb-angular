import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BuildService, CardClass} from "../../../service";

@Component({
  selector: 'app-description-modal',
  templateUrl: './description-modal.component.html',
  styleUrls: ['./description-modal.component.css'],

})

export class DescriptionModalComponent implements OnInit {
  housing: CardClass | null;

  @Input() guests?: number;

  constructor(
    private route: ActivatedRoute,
    private buildService: BuildService
    ) {
    this.housing = null;
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const newBuildingArr = this.buildService.getPinById(Number(id));

    if (id) {
      this.housing = newBuildingArr;
      this.guests = this.housing?.guests
    }
  }

  clickForm () {
    console.log('123')
  }

}
