import { Component, OnInit, Input } from '@angular/core';
import { Idol } from '../idols';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { IdolService } from '../idol.service';


@Component({
  selector: 'app-idol-details',
  templateUrl: './idol-details.component.html',
  styleUrls: ['./idol-details.component.css']
})



export class IdolDetailsComponent implements OnInit {

  @Input() idol?: Idol;

  constructor(private route: ActivatedRoute,
    private idolService: IdolService,
    private location: Location) { }

  ngOnInit(): void {
    this.getIdol();
  }

  getIdol(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.idolService.getIdol(id)
      .subscribe(idol => this.idol = idol);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.idol) {
      this.idolService.updateIdol(this.idol)
        .subscribe(() => this.goBack());
    }
  }


}
