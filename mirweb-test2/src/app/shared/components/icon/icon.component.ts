import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { customIcons } from '../../../core/variables/custom-icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent implements OnInit, AfterViewInit {
  @ViewChild('icon') icon: any;
  @Input() name!: string;
  @Input() mt: number = 0;
  @Input() size: number = 24;
  customIcon!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.customIcon = customIcons.includes(this.name);
  }

  ngAfterViewInit(): void {
    this.removeAngularWrapper();
  }

  sizeStyles(): string {
    return `font-size: ${this.size}px; margin-top: ${this.mt}px; height: ${this.size}px; width: ${this.size}px;`;
  }

  private removeAngularWrapper() {
    const iconElement = this.icon._elementRef.nativeElement;
    const iconWrapper = iconElement.parentElement;

    iconWrapper.parentElement.insertBefore(iconElement, iconWrapper);
    iconWrapper.remove();
  }
}
