import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import {
  click,
  findAllByName,
  findByName,
  findByTestId,
  validateClassesExistence,
  validateClassesNonExistence,
} from '../../../../testing/testing-methods';
import { Component, DebugElement, Input } from '@angular/core';
import createSpy = jasmine.createSpy;

@Component({
  selector: 'app-icon',
  template: `
    <div data-testid="content">
      <ng-content></ng-content>
    </div>
    <div data-testid="name">{{ name }}</div>
    <div data-testid="size">{{ size }}</div>
  `,
})
export class MockIcon {
  @Input() name!: string;
  @Input() size: number = 24;
}

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let buttonEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent, MockIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    buttonEl = findByName(fixture, 'button');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('color classes', () => {
    it('given no color, should have btn-primary class', () => {
      validateClassesExistence(buttonEl, ['btn-primary']);
      validateClassesNonExistence(buttonEl, ['btn-accent']);
    });

    it('given primary color, should have btn-primary class', () => {
      component.color = 'primary';
      fixture.detectChanges();
      buttonEl = findByName(fixture, 'button');

      validateClassesExistence(buttonEl, ['btn-primary']);
      validateClassesNonExistence(buttonEl, ['btn-accent']);
    });

    it('given accent color, should have btn-accent class', () => {
      component.color = 'accent';
      fixture.detectChanges();
      buttonEl = findByName(fixture, 'button');

      validateClassesExistence(buttonEl, ['btn-accent']);
      validateClassesNonExistence(buttonEl, ['btn-primary']);
    });
  });

  it('given no look, should have btn-fill class', () => {
    validateClassesExistence(buttonEl, ['btn-fill']);
    validateClassesNonExistence(buttonEl, ['btn-outline']);
  });

  describe('look classes', () => {
    const looks: ('fill' | 'outline' | 'icon' | 'menu' | 'label')[] = [
      'fill',
      'outline',
      'icon',
      'menu',
      'label',
    ];

    looks.forEach((look) => {
      it(`given ${look} look, should have btn-fill class`, () => {
        component.look = look;
        fixture.detectChanges();
        buttonEl = findByName(fixture, 'button');

        let otherLookClasses = looks
          .filter((otherLook) => otherLook !== look)
          .map((otherLook) => 'btn-' + otherLook);

        validateClassesExistence(buttonEl, ['btn-' + look]);
        validateClassesNonExistence(buttonEl, otherLookClasses);
      });
    });
  });

  describe('size classes', () => {
    const mediumClasses = ['min-w-[6rem]', 'min-h-[2.5rem]'];
    const smallClasses = ['min-w-[5rem]', 'min-h-[1.75rem]', 'text-xs'];

    it('given medium size, then should have medium size classes only', () => {
      validateClassesExistence(buttonEl, mediumClasses);
      validateClassesNonExistence(buttonEl, smallClasses);
    });

    it('given small size, then should have small size classes only', () => {
      component.size = 'small';
      fixture.detectChanges();
      buttonEl = findByName(fixture, 'button');

      validateClassesExistence(buttonEl, smallClasses);
      validateClassesNonExistence(buttonEl, mediumClasses);
    });
  });

  it('given no icon, then should show no image', () => {
    expect(findAllByName(fixture, 'app-icon').length).toBe(0);
  });

  describe('given icon', () => {
    const iconName = 'any-icon-name';
    let iconInstance: DebugElement;

    beforeEach(() => {
      component.icon = iconName;
      fixture.detectChanges();

      iconInstance = findByName(fixture, 'app-icon');
    });

    it('then should have icon with given name', () => {
      expect(findByTestId(iconInstance, 'name').nativeElement.innerText).toBe(iconName);
    });

    it('given medium size, then should have icon with size 24', () => {
      expect(findByTestId(iconInstance, 'size').nativeElement.innerText).toBe('24');
    });

    it('given small size, then should have icon with size 16', () => {
      component.size = 'small';
      fixture.detectChanges();
      iconInstance = findByName(fixture, 'app-icon');

      expect(findByTestId(iconInstance, 'size').nativeElement.innerText).toBe('16');
    });
  });

  describe('given function', () => {
    let spyFunction: Function;

    beforeEach(() => {
      spyFunction = createSpy('anyFunction', () => {});
      component.onClick = spyFunction;
      fixture.detectChanges();

      buttonEl = findByName(fixture, 'button');
    });

    it('when button is not clicked, then should not call that function', () => {
      expect(spyFunction).not.toHaveBeenCalled();
    });

    it('when button is clicked, then should call that function', () => {
      click(buttonEl);

      expect(spyFunction).toHaveBeenCalled();
    });
  });
});
