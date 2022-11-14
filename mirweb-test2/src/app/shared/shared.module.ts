import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { UsernamePipe } from './pipes/username.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { TextInputComponent } from './components/text-input/text-input.component';
import { IconComponent } from './components/icon/icon.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    CommentsComponent,
    ShortenPipe,
    UsernamePipe,
    TimeAgoPipe,
    HighlightDirective,
    TextInputComponent,
    IconComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    CommentsComponent,
    MaterialModule,
    ReactiveFormsModule,
    ShortenPipe,
    UsernamePipe,
    TimeAgoPipe,
    HighlightDirective,
    TextInputComponent,
    IconComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
