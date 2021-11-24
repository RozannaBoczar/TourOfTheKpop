import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Idol } from '../idols';
import { IdolService } from '../idol.service';

@Component({
  selector: 'app-idol-search',
  templateUrl: './idol-search.component.html',
  styleUrls: [ './idol-search.component.css' ]
})
export class IdolSearchComponent implements OnInit {
  idols$!: Observable<Idol[]>;
  private searchTerms = new Subject<string>();

  constructor(private idolService: IdolService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.idols$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.idolService.searchIdols(term)),
    );
  }
}