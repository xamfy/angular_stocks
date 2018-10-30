import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-shares',
  templateUrl: './shares.component.html',
  styleUrls: ['./shares.component.css']
})
export class SharesComponent implements OnInit {

  public data;

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.getShareData().subscribe((data) => {
      this.data = data;
      console.log(data['Time Series (Daily)']);
    });
  }
}
