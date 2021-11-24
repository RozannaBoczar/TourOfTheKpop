import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdolSearchComponent } from './idol-search.component';

describe('IdolSearchComponent', () => {
  let component: IdolSearchComponent;
  let fixture: ComponentFixture<IdolSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdolSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdolSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
