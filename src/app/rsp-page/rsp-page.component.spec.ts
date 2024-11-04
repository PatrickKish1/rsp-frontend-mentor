import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RspPageComponent } from './rsp-page.component';

describe('RspPageComponent', () => {
  let component: RspPageComponent;
  let fixture: ComponentFixture<RspPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RspPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RspPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
