import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistActiveComponent } from './watchlist-active.component';

describe('WatchlistActiveComponent', () => {
  let component: WatchlistActiveComponent;
  let fixture: ComponentFixture<WatchlistActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchlistActiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchlistActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
