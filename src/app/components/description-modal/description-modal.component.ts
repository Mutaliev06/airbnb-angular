import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {housing, ICardClass} from "../card/card.component";

@Component({
  selector: 'app-description-modal',
  templateUrl: './description-modal.component.html',
  styleUrls: ['./description-modal.component.css'],

})
export class DescriptionModalComponent implements OnInit {
  housing: ICardClass[];

  constructor(private route: ActivatedRoute) {
    this.housing = [];
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.housing = housing.filter(x => x.id === Number(id))
    }
  }

}
