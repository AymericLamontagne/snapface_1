import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { customIcons } from '../variables/custom-icons';

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer
  ) {}

  registerCustomIcons(): void {
    customIcons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitzer.bypassSecurityTrustResourceUrl(`../../assets/icons/${icon}.svg`)
      );
    });
  }
}
