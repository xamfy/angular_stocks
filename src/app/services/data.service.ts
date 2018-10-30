import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_URL_SHARES: string;
  // API_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=JUBLFOOD.NSE&apikey=YOUR_API_KEY';
  API_URL_CRYPTO: string;
  // https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CNY&apikey=demo

  constructor(private http: HttpClient) { }


  getCryptoData(search_term: string) {
    this.API_URL_CRYPTO =
    'https://www.alphavantage.co/query?' +
    'function=CURRENCY_EXCHANGE_RATE&from_currency=' + search_term + '&to_currency=USD&apikey=YOUR_API_KEY';
    return this.http.get(this.API_URL_CRYPTO);
  }

  getShareData(search_term: string) {
    this.API_URL_SHARES = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + search_term + '&apikey=YOUR_API_KEY';
    return this.http.get(this.API_URL_SHARES);
  }
}
