import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHijosDialogComponent } from './update-hijos-dialog.component';

describe('UpdateHijosDialogComponent', () => {
  let component: UpdateHijosDialogComponent;
  let fixture: ComponentFixture<UpdateHijosDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHijosDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHijosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
