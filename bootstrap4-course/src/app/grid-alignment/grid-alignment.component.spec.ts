import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAlignmentComponent } from './grid-alignment.component';

describe('GridAlignmentComponent', () => {
  let component: GridAlignmentComponent;
  let fixture: ComponentFixture<GridAlignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridAlignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAlignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
