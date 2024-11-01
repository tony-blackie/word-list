import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  getAllWords() {
    return this.http.get('https://swapi.dev/api/people/1');
  }
}
