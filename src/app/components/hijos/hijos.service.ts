import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HijosService {

  private url_api = 'https://localhost:7023/api'

  constructor(private http: HttpClient) { }

  getAllHijo(){
    return this.http.get<any>(`${this.url_api}/hijo`);
  }

  createHijo(hijo: any){
    return this.http.post<any>(`${this.url_api}/hijo`, hijo);
  }

  updateHijo(hijo: any): Observable<any> {
    return this.http.put(`${this.url_api}/hijo/${hijo.idHijo}`, hijo);
  }

  deleteHijo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url_api}/hijo/${id}`);
  }

  getHijoByPersonal(idPersonal : number){
    return this.http.get<any>(`${this.url_api}/hijo/${idPersonal}`);
  }
}
