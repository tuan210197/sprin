import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Winner } from '../model/winner';
import { Four } from '../model/four';
import { Second } from '../model/second';
import { First } from '../model/first';


@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private apiUrl = '/api'; // Replace with your API URL

  constructor(private http: HttpClient, private router: Router) { }


  getSpecial(): Observable<Winner> {
    return this.http.get<Winner>(this.apiUrl + '/special/get');
  }
 getListSpecial(): Observable<First>{
    return this.http.get<First>(this.apiUrl+'/special/list');
  }
  
  getFirst(): Observable<Winner> {
    return this.http.get<Winner>(this.apiUrl + '/first/get');
  }

  getListFirst(): Observable<First>{
    return this.http.get<First>(this.apiUrl+'/first/list');
  }
  
 
  
  getSecond(): Observable<Winner> {
    return this.http.get<Winner>(this.apiUrl + '/second/get');
  }
  getThird(): Observable<Winner> {
    return this.http.get<Winner>(this.apiUrl + '/third/get');
  }
  getFourth(): Observable<Winner> {
    return this.http.get<Winner>(this.apiUrl + '/four/get');
  }
  getRandom(): Observable<Winner> {
    return this.http.get<Winner>(this.apiUrl + '/user/random');
  }
  chooseCon(num : number) :Observable<Winner>{
    return this.http.get<Winner>(this.apiUrl + '/congra/get/' + num);
  }

  getNumberChoosen(): Observable<number> {
    return this.http.get<number>(this.apiUrl + '/congra/get-all');
  }

  getListFourA(four: Four): Observable<Four[]> {
    return this.http.post<Four[]>(this.apiUrl + '/four/get-list' , four);
  }
  getListFourB(four: Four): Observable<Four[]> {
    return this.http.post<Four[]>(this.apiUrl + '/four/get-list' , four);
  }
  getFourA() {
    return this.http.get(this.apiUrl + '/four/get-4a');
  }
  getFourB() {
    return this.http.get(this.apiUrl + '/four/get-4b');
  }
  getThirdA() {
    return this.http.get(this.apiUrl + '/third/get-3a');
  }
  getThirdB() {
    return this.http.get(this.apiUrl + '/third/get-3b');
  }

  getListThirdA(four: Four): Observable<Four[]> {
    return this.http.post<Four[]>(this.apiUrl + '/third/get-list' , four);
  }

  getSecondA() {
    return this.http.get(this.apiUrl + '/second/get-2a');
  }
  getSecondB() {
    return this.http.get(this.apiUrl + '/second/get-2b');
  }

  getListSecond(second: Second): Observable<Second[]> {
    return this.http.post<Second[]>(this.apiUrl + '/second/get-list' , second);
  }

  // delete service

  onDeleteSecond(second: Second) {
    return this.http.post(this.apiUrl + '/second/delete',  second)
  }
  onDeleteFirst(first: First) {
    return this.http.post(this.apiUrl + '/first/delete',  first)
  }
  onDeleteSpecial(special: First) {
    return this.http.post(this.apiUrl + '/special/delete',  special)
  }
}
