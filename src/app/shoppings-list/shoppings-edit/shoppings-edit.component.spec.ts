import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingsEditComponent } from './shoppings-edit.component';

describe('ShoppingsEditComponent', () => {
  let component: ShoppingsEditComponent;
  let fixture: ComponentFixture<ShoppingsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
