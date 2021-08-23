import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPtypeComponent } from './add-ptype.component';

describe('AddPtypeComponent', () => {
  let component: AddPtypeComponent;
  let fixture: ComponentFixture<AddPtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
