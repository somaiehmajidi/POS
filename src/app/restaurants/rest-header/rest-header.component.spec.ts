import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestHeaderComponent } from './rest-header.component';

describe('RestHeaderComponent', () => {
  let component: RestHeaderComponent;
  let fixture: ComponentFixture<RestHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
