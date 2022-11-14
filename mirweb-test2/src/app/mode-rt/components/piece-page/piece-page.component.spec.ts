import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecePageComponent } from './piece-page.component';

describe('PiecePageComponent', () => {
  let component: PiecePageComponent;
  let fixture: ComponentFixture<PiecePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiecePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiecePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
