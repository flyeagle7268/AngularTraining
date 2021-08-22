import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleboxComponent } from './flebox.component';

describe('FleboxComponent', () => {
  let component: FleboxComponent;
  let fixture: ComponentFixture<FleboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
