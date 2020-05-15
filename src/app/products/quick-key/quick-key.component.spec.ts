import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickkeyComponent } from './quick-key.component';

describe('QuickkeyComponent', () => {
  let component: QuickkeyComponent;
  let fixture: ComponentFixture<QuickkeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickkeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
