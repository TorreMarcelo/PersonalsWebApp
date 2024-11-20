import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePersonalDialogComponent } from './delete-personal-dialog.component';

describe('DeletePersonalDialogComponent', () => {
  let component: DeletePersonalDialogComponent;
  let fixture: ComponentFixture<DeletePersonalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePersonalDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePersonalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
