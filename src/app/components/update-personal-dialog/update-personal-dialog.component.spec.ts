import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonalDialogComponent } from './update-personal-dialog.component';

describe('UpdatePersonalDialogComponent', () => {
  let component: UpdatePersonalDialogComponent;
  let fixture: ComponentFixture<UpdatePersonalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePersonalDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePersonalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
