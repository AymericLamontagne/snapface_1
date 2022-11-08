import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPieceComponent } from './dialog-piece.component';

describe('DialogPieceComponent', () => {
  let component: DialogPieceComponent;
  let fixture: ComponentFixture<DialogPieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPieceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
