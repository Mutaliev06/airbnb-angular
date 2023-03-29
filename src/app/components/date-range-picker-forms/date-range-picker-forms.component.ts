import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-date-range-picker-forms',
  templateUrl: './date-range-picker-forms.component.html',
  styleUrls: ['./date-range-picker-forms.component.css']
})

export class DateRangePickerFormsComponent {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}
