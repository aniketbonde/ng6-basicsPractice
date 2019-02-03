import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRoutingComponent } from './http-routing.component';

describe('HttpRoutingComponent', () => {
  let component: HttpRoutingComponent;
  let fixture: ComponentFixture<HttpRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
