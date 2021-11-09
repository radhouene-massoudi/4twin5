import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstComponent } from './addst.component';

describe('AddstComponent', () => {
  let component: AddstComponent;
  let fixture: ComponentFixture<AddstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
