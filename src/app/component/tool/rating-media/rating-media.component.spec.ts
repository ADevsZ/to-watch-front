import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingMediaComponent } from './rating-media.component';

describe('RatingMediaComponent', () => {
  let component: RatingMediaComponent;
  let fixture: ComponentFixture<RatingMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
