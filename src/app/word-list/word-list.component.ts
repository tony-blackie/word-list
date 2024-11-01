import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordsService } from '../words.service';
import { CommonModule } from '@angular/common';

interface Word {
  text: string;
  repetitionCounter: number;
  name: string;
}

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
      this.words = [data as any];
      console.log('data: ', data);
    });
  }
}
