import { Component, inject } from '@angular/core';
import { Word, WordsService } from '../words.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-word-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word-list.component.html',
  styleUrl: './word-list.component.css',
})
export class WordListComponent {
  wordsService = inject(WordsService);
  words: Word[] = [];

  constructor() {
    this.wordsService.getAllWords().subscribe((data) => {
      this.words = this.wordsService.transformWordResponse(data as any);
      console.log('data: ', data);
    });
  }
}
