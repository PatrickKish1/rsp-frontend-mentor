import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesButtonComponent } from './rules-button.component';

describe('RulesButtonComponent', () => {
  let component: RulesButtonComponent;
  let fixture: ComponentFixture<RulesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulesButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
