import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHijosDialogComponent } from './create-hijos-dialog.component';

describe('CreateHijosDialogComponent', () => {
  let component: CreateHijosDialogComponent;
  let fixture: ComponentFixture<CreateHijosDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHijosDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHijosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
