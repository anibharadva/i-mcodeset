import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Character} from './character.model';
@Injectable()
export class CharacterService {

    constructor(public http: HttpClient) { }
    /**
     * GET api to call characters endpoint
     *
     *@return list of character
     */
    getCharacters(): Observable<Character[]> {
        return this.http.get<Character[]>(environment.BASE_URL + 'characters');
    }
}
