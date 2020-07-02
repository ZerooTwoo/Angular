import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collumn',
  templateUrl: './collumn.component.html',
  styleUrls: ['./collumn.component.scss']
})
export class CollumnComponent implements OnInit {

  @Input() collumnName: string;
  constructor() { }

  cardTab: string[] = []
  card :string;
  ngOnInit(): void {
  }
  addCard(cardName: String){
    
  }
}
