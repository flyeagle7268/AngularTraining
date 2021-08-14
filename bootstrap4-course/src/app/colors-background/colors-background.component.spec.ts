import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsBackgroundComponent } from './colors-background.component';

describe('ColorsBackgroundComponent', () => {
  let component: ColorsBackgroundComponent;
  let fixture: ComponentFixture<ColorsBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
