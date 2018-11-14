import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingsListComponent } from './shoppings-list.component';

describe('ShoppingsListComponent', () => {
  let component: ShoppingsListComponent;
  let fixture: ComponentFixture<ShoppingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
