import {Component, OnInit} from '@angular/core';
import { FormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})


export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`)
  public isCollapsed = true;



  onSubmit(form: any){
    console.log(form)
  }

  constructor() {
  }
  ngOnInit() {

  }




}
