import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGuestsComponent } from './select-guests.component';

describe('SelectGuestsComponent', () => {
  let component: SelectGuestsComponent;
  let fixture: ComponentFixture<SelectGuestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectGuestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
