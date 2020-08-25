import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Character} from '../character/character.model';
import {environment} from '../../../../environments/environment';


@Injectable()
export class CharacterdtlService {
    result: Character;
    constructor(public http: HttpClient) { }

    /**
     * GET api to call character details by id
     *
     *@return of character detail
     */
   getCharacterById(urlname: string): Observable<Character> {
        return this.http.get<Character>(urlname);
    }
}
