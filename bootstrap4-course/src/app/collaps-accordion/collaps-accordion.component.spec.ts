import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsAccordionComponent } from './collaps-accordion.component';

describe('CollapsAccordionComponent', () => {
  let component: CollapsAccordionComponent;
  let fixture: ComponentFixture<CollapsAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapsAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
