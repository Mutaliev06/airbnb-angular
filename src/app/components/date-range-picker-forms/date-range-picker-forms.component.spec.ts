import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangePickerFormsComponent } from './date-range-picker-forms.component';

describe('DateRangePickerFormsComponent', () => {
  let component: DateRangePickerFormsComponent;
  let fixture: ComponentFixture<DateRangePickerFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateRangePickerFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateRangePickerFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
