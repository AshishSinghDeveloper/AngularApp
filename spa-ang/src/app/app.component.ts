import { Component } from '@angular/core';
import { toUnicode } from 'punycode';
import { Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Single Page';
  name = "Ashish Singh";

  todoValue: string;
  list: Todo[];

  ngOnInit(){
    this.list = [];
    this.todoValue = "";
  }

  AddItem(){
    if(this.todoValue !== null){
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      this.list.push(newItem);
    }
    this.todoValue="";    
  }

  DeleteItem(id: number){
    this.list = this.list.filter(item => item.id !== id);
  }

}

