import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Word {
  text: string;
  repetitionCounter: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  getAllWords() {
    return this.http.get(API_ROUTES.USERS);
  }

  transformWordResponse(response: {
    count: number;
    results: { name: string }[];
  }) {
    return response.results as Word[];
  }
}
