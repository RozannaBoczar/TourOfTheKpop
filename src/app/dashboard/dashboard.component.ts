import { Component, OnInit } from '@angular/core';
import { Idol } from '../idols';
import { IdolService } from '../idol.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  idols: Idol[] = [];

  constructor(private idolService: IdolService) { }

  ngOnInit(): void {
    this.getIdols();
  }

  getIdols(): void {
    this.idolService.getIdols()
      .subscribe(idols => this.idols = idols.slice(1, 5));
  }
}