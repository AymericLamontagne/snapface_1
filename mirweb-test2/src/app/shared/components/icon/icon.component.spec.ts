import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconComponent } from './icon.component';
import { Component, DebugElement, Input } from '@angular/core';
import { customIcons } from '../../../core/variables/custom-icons';
import {
  findByName,
  findByTestId,
  validateStyleValues,
} from '../../../../testing/testing-methods';
import createSpy = jasmine.createSpy;

let insertBeforeSpy: jasmine.Spy<() => void>;
let removeSpy: jasmine.Spy<() => void>;

@Component({
  selector: 'mat-icon',
  template: `
    <div data-testid="content">
      <ng-content></ng-content>
    </div>
    <div data-testid="svg-icon">{{ svgIcon }}</div>
  `,
})
class MockMatIcon {
  @Input() svgIcon?: string;

  _elementRef = {
    nativeElement: {
      parentElement: {
        parentElement: {
          insertBefore: insertBeforeSpy,
        },
        remove: removeSpy,
      },
    },
  };
}

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  const createIconComponent = (iconName: string) => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    component.name = iconName;
    fixture.detectChanges();
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconComponent, MockMatIcon],
    }).compileComponents();

    insertBeforeSpy = createSpy('insertBefore', () => {
    });
    removeSpy = createSpy('removeSpy', () => {
    });

    createIconComponent(customIcons[0]);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('DOM manipulation', () => {
    it(
      'given insertBeforeSpy, when component is created, then insertBeforeSpy should be' +
      ' called',
      () => {
        expect(insertBeforeSpy).toHaveBeenCalled();
      }
    );

    it('given removeSpy, when component is created, then removeSpy should be called', () => {
      expect(removeSpy).toHaveBeenCalled();
    });
  });

  describe('icon names', () => {
    let matIcon: DebugElement;

    describe('given icon is from custom list, when component is created,', () => {
      beforeEach(() => {
        matIcon = findByName(fixture, 'mat-icon');
      });

      it('then icon should have property svgIcon with icon name', () => {
        const svgIconValue = findByTestId(matIcon, 'svg-icon').nativeElement.innerText;
        expect(svgIconValue).toBe(customIcons[0]);
      });

      it('then icon should not have icon name in html', () => {
        const iconContent = findByTestId(matIcon, 'content').nativeElement.innerText;
        expect(iconContent.trim()).toBe('');
      });
    });

    describe('given icon is not from custom list, when component is created,', () => {
      const iconName = 'an-icon-name-so-long-it-should-not-exist-in-the-custom-list';

      beforeEach(() => {
        createIconComponent(iconName);

        expect(customIcons.includes(iconName))
          .withContext('icon should not be custom')
          .not.toBeTrue();

        matIcon = findByName(fixture, 'mat-icon');
      });

      it('then icon should not have property svgIcon', () => {
        const svgIconValue = findByTestId(matIcon, 'svg-icon').nativeElement.innerText;
        expect(svgIconValue).toBe('');
      });

      it('then icon should have icon name in html', () => {
        const iconContent = findByTestId(matIcon, 'content').nativeElement.innerText;
        expect(iconContent.trim()).toBe(iconName);
      });
    });
  });

  describe('size styles', () => {
    it('given no size, then should have size styles with 24px', () => {
      validateStyleValues(findByName(fixture, 'mat-icon'), {
        fontSize: '24px',
        width: '24px',
        height: '24px',
      });
    });

    it('given size 10, then should have size styles with 10px', () => {
      component.size = 10;
      fixture.detectChanges();

      validateStyleValues(findByName(fixture, 'mat-icon'), {
        fontSize: '10px',
        width: '10px',
        height: '10px',
      });
    });
  });
});
