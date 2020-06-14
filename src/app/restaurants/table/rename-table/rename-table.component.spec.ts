import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameTableComponent } from './rename-table.component';

describe('RenameTableComponent', () => {
  let component: RenameTableComponent;
  let fixture: ComponentFixture<RenameTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenameTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenameTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
