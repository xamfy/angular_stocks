import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Stocks';
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.getShareData().subscribe((data) => {
       console.log(data);
    });
  }

}
