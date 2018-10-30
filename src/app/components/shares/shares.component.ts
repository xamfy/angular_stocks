import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-shares',
  templateUrl: './shares.component.html',
  styleUrls: ['./shares.component.css']
})
export class SharesComponent implements OnInit {

  public data;
  search_term: string;

  constructor(private dataService: DataService) {}
  ngOnInit() {
    // this.dataService.getShareData().subscribe((data) => {
    //   this.data = data['Time Series (Daily)'];
    //   console.log(data['Time Series (Daily)']);
    // });
  }

  getPrice() {
    this.dataService.getShareData(this.search_term).subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
}
