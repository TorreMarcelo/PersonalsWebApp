import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHijosDialogComponent } from './delete-hijos-dialog.component';

describe('DeleteHijosDialogComponent', () => {
  let component: DeleteHijosDialogComponent;
  let fixture: ComponentFixture<DeleteHijosDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHijosDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteHijosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
