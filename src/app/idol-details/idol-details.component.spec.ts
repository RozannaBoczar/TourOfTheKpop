import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdolDetailsComponent } from './idol-details.component';

describe('IdolDetailsComponent', () => {
  let component: IdolDetailsComponent;
  let fixture: ComponentFixture<IdolDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdolDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdolDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
