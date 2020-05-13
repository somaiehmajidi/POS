import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickKeyModalComponent } from './quick-key-modal.component';

describe('QuickKeyModalComponent', () => {
  let component: QuickKeyModalComponent;
  let fixture: ComponentFixture<QuickKeyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickKeyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickKeyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
