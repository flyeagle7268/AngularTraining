import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ibm2ColumnLayoutComponent } from './ibm2-column-layout.component';

describe('Ibm2ColumnLayoutComponent', () => {
  let component: Ibm2ColumnLayoutComponent;
  let fixture: ComponentFixture<Ibm2ColumnLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ibm2ColumnLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ibm2ColumnLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
