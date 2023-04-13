import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Driver Doc Vault';
  nums = [10, 20,25,30,40,55];
  sum = ()=>{
    return this.nums[0]+this.nums[1];
  }

  message = "";
  clickme(val: any) {
    console.log(val);
    this.message = val;
  }
  red = 'background-color:red';
  green = 'background-color:green';
  show = true;
  toggle(){
    this.show = !this.show;
  }

  inc(){
    this.nums.push(Math.floor(Math.random()*100));
  }
  dec(){
    this.nums.pop();
  }
}
