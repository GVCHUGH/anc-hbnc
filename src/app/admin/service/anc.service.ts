import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../env/environments';
import { apiEndpoints } from '../../core/endpoints/api.endpoints';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AncService {
  constructor(private http: HttpClient) {}

  addANC(data: any) {
    return this.http.post(apiEndpoints.allANC + '.json', data);
  }

  addHBNC(data: any) {
    return this.http.post(apiEndpoints.allHBNC + '.json', data);
  }

  getHBNCById(id: any) {
    return this.http.get(`${apiEndpoints.allHBNC}/${id}.json`);
  }

  updateANC(data: any, id: any) {
    return this.http.put(apiEndpoints.allANC + '/' + id + '.json', data);
  }

  deleteANC(id: any) {
    return this.http.delete(apiEndpoints.allANC + '/' + id + '.json');
  }

  getANC() {
    return this.http.get(apiEndpoints.allANC + '.json').pipe(
      map((response: any) => {
        let allANC = [];

        for (let key in response) {
          if (response.hasOwnProperty(key)) {
            allANC.push({ ...response[key], id: key });
          }
        }
        return allANC;
      })
    );
  }
}
