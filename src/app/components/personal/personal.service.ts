import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  private url_api = 'https://localhost:7023/api'

  constructor(private http: HttpClient) { }

  getAllPersonal(){
    return this.http.get<any>(`${this.url_api}/personal`);
  }

  createPersonal(personal: any){
    return this.http.post<any>(`${this.url_api}/personal`, personal);
  }

  updatePersonal(personal: any): Observable<any> {
    return this.http.put(`${this.url_api}/personal/${personal.idPersonal}`, personal);
  }

  deletePersonal(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url_api}/personal/${id}`);
  }
}
