import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  public data;
  search_term: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  getPrice() {
    this.dataService.getCryptoData(this.search_term).subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }

}
