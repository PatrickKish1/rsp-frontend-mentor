import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RspResultsComponent } from './rsp-results.component';

describe('RspResultsComponent', () => {
  let component: RspResultsComponent;
  let fixture: ComponentFixture<RspResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RspResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RspResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
