import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonalDialogComponent } from './create-personal-dialog.component';

describe('CreatePersonalDialogComponent', () => {
  let component: CreatePersonalDialogComponent;
  let fixture: ComponentFixture<CreatePersonalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePersonalDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePersonalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
