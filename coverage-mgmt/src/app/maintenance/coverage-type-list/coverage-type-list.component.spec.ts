import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageTypeListComponent } from './coverage-type-list.component';

describe('CoverageTypeListComponent', () => {
  let component: CoverageTypeListComponent;
  let fixture: ComponentFixture<CoverageTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverageTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
