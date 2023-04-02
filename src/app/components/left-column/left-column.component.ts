import {Component, Input, OnInit} from '@angular/core';
import {Build, BuildService} from "../../../service";

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.css']
})
export class LeftColumnComponent {

  @Input() clickBuild?: number;

}
