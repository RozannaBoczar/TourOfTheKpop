import { Component, OnInit } from '@angular/core';
import { Idol } from '../idols'; 
import { IDOLS } from '../idols-mock';
import { MessageService } from '../message.service';
import { IdolService } from '../idol.service';

@Component({
  selector: 'app-idols',
  templateUrl: './idols.component.html',
  styleUrls: ['./idols.component.css']
})

export class IdolsComponent implements OnInit {

  idols : Idol[] = [];

  constructor(private idolService: IdolService, private messageService: MessageService) { }

  ngOnInit(): void {

    this.getIdols();
    
  }

  selectedIdol?: Idol;
  
  onSelect(idol: Idol): void {
  this.selectedIdol = idol;
  this.messageService.add(`IdolsComponent: Selected idol id=${idol.id}`);
  }

  getIdols(): void {
    this.idolService.getIdols()
    .subscribe(idols => this.idols = idols);
  };

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.idolService.addIdol({ name } as Idol)
      .subscribe(idol => {
        this.idols.push(idol);
      });
  }

  
  delete(idol: Idol): void {
    this.idols = this.idols.filter(h => h !== idol);
    this.idolService.deleteIdol(idol.id).subscribe();
  }

  
}

