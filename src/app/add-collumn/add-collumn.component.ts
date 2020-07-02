import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-collumn',
  templateUrl: './add-collumn.component.html',
  styleUrls: ['./add-collumn.component.scss']
})
export class AddCollumnComponent implements OnInit {
  @Output() info = new EventEmitter<String>();

  checkoutForm: FormGroup;
  constructor() { 
    this.checkoutForm = new FormGroup({
      name : new FormControl('')
    });
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.info.emit(this.checkoutForm.get("name").value);
    console.log(this.checkoutForm.get("name").value)
  }
}
