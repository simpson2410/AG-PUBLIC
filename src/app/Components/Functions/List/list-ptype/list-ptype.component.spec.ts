import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPtypeComponent } from './list-ptype.component';

describe('ListPtypeComponent', () => {
  let component: ListPtypeComponent;
  let fixture: ComponentFixture<ListPtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
