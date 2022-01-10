import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageTypeEditComponent } from './coverage-type-edit.component';

describe('CoverageTypeEditComponent', () => {
  let component: CoverageTypeEditComponent;
  let fixture: ComponentFixture<CoverageTypeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverageTypeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
