import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title ="angular"
  tabCollumn : string[] = []
  createCollumn(name:string){
    console.log('test fonction')
    this.tabCollumn.push(name);
  }
}
