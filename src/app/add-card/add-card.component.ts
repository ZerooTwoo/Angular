import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  @Output() info = new EventEmitter<String>();

  checkoutForm: FormGroup;
  constructor() { 
    name : new FormControl('');
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.info.emit(this.checkoutForm.get("name").value);
  }
}
