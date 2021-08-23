import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MguserComponent } from './mguser.component';

describe('MguserComponent', () => {
  let component: MguserComponent;
  let fixture: ComponentFixture<MguserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MguserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
