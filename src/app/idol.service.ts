import { Injectable } from '@angular/core';
import { Idol } from './idols';
import { IDOLS } from './idols-mock';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class IdolService {

  constructor( private http: HttpClient, private messageService: MessageService) { }

  private idolsURL = 'api/idols';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getIdols(): Observable<Idol[]>{
    this.messageService.add('IdolService: fetched idols');
    return this.http.get<Idol[]>(this.idolsURL)
    .pipe(
      tap(_ => this.log('fetched idols')),
      catchError(this.handleError<Idol[]>('getIdols', []))
    );
  }

  getIdol(id: number): Observable<Idol> {
    const url = `${this.idolsURL}/${id}`;
  return this.http.get<Idol>(url).pipe(
    tap(_ => this.log(`fetched idol id=${id}`)),
    catchError(this.handleError<Idol>(`getIdol id=${id}`))
  );
  }
/** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`IdolService: ${message}`);
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

updateIdol(idol: Idol): Observable<any> {
  return this.http.put(this.idolsURL, idol, this.httpOptions).pipe(
    tap(_ => this.log(`updated idol id=${idol.id}`)),
    catchError(this.handleError<any>('updateIdol'))
  );
}

addIdol(idol: Idol): Observable<Idol> {
  return this.http.post<Idol>(this.idolsURL, idol, this.httpOptions).pipe(
    tap((newIdol: Idol) => this.log(`added idol w/ id=${newIdol.id}`)),
    catchError(this.handleError<Idol>('addIdol'))
  );
}

/** DELETE: delete the hero from the server */
deleteIdol(id: number): Observable<Idol> {
  const url = `${this.idolsURL}/${id}`;

  return this.http.delete<Idol>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted idol id=${id}`)),
    catchError(this.handleError<Idol>('deleteIdol'))
  );
}

/* GET heroes whose name contains search term */
searchIdols(term: string): Observable<Idol[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Idol[]>(`${this.idolsURL}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found heroes matching "${term}"`) :
       this.log(`no heroes matching "${term}"`)),
    catchError(this.handleError<Idol[]>('searchIdols', []))
  );
}

}


