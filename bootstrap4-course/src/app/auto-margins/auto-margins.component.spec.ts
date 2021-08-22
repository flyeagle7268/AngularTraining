import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoMarginsComponent } from './auto-margins.component';

describe('AutoMarginsComponent', () => {
  let component: AutoMarginsComponent;
  let fixture: ComponentFixture<AutoMarginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoMarginsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoMarginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
