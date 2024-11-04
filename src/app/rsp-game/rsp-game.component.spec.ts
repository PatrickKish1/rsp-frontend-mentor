import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RspGameComponent } from './rsp-game.component';

describe('RspGameComponent', () => {
  let component: RspGameComponent;
  let fixture: ComponentFixture<RspGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RspGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RspGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
