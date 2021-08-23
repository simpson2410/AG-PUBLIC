import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPtypeComponent } from './edit-ptype.component';

describe('EditPtypeComponent', () => {
  let component: EditPtypeComponent;
  let fixture: ComponentFixture<EditPtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
