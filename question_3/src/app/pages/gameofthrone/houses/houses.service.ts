import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Houses} from './houses.model';
@Injectable()
export class HousesService {

    constructor(public http: HttpClient) { }
    /**
     * GET api to call houses endpoint
     *
     *@return list of houses
     */
    getHouses(): Observable<Houses[]> {
        return this.http.get<Houses[]>(environment.BASE_URL + 'houses/');
    }
}
