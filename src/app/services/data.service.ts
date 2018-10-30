import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_URL: string;
  // API_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=JUBLFOOD.NSE&apikey=YOUR_API_KEY';

  constructor(private http: HttpClient) { }

  getShareData(search_term: string) {
    this.API_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + search_term + '&apikey=YOUR_API_KEY';
    return this.http.get(this.API_URL);
  }
}
