import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=JUBLFOOD.NSE&apikey=YOUR_API_KEY';

  constructor(private http: HttpClient) { }

  getShareData() {
    return this.http.get(this.API_URL);
  }
}
