import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeRtComponent } from './mode-rt.component';

describe('ModeRtComponent', () => {
  let component: ModeRtComponent;
  let fixture: ComponentFixture<ModeRtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeRtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
