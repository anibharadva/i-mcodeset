import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Books} from './books.model';
@Injectable()
export class BooksService {

    constructor(public http: HttpClient) { }

    /**
     * GET api to call books endpoint
     *
     *@return list of books
     */
    getBooks(): Observable<Books[]> {
        return this.http.get<Books[]>(environment.BASE_URL + 'books');
    }
}
