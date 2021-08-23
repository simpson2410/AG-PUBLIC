import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcityComponent } from './pcity.component';

describe('PcityComponent', () => {
  let component: PcityComponent;
  let fixture: ComponentFixture<PcityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
