import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordListComponent } from './word-list/word-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WordListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'words';
}
