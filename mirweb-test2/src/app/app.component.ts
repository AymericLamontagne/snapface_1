import { Component } from '@angular/core';
import { IconsService } from './core/services/icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private iconService: IconsService) {
    iconService.registerCustomIcons();
  }

  title = 'mirweb-test2';
}
