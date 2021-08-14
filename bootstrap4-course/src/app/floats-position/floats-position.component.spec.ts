import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatsPositionComponent } from './floats-position.component';

describe('FloatsPositionComponent', () => {
  let component: FloatsPositionComponent;
  let fixture: ComponentFixture<FloatsPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatsPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatsPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
