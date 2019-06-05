import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservactionComponent } from './reservaction.component';

describe('ReservactionComponent', () => {
  let component: ReservactionComponent;
  let fixture: ComponentFixture<ReservactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
