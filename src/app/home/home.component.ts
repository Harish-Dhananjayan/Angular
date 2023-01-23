import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(){}
  headername="Home Page";
  salary="100000";
  isdisabled=false;
  colorname="green";
  font="40px";
  classname="headclass";
  stylevalue={"color":"green","font-size":"60px"}
  colors=['Green','Red','Blue','Yellow','Black']
  ngOnInit(): void {
    
  }
  FunctionClick(name:string){
    alert (name)
  }

}
