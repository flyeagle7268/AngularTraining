import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMatButtonComponent } from './my-mat-button.component';

describe('MyMatButtonComponent', () => {
  let component: MyMatButtonComponent;
  let fixture: ComponentFixture<MyMatButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMatButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
