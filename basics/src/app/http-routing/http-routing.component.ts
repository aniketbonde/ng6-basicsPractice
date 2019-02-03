import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-http-routing',
  templateUrl: './http-routing.component.html',
  styleUrls: ['./http-routing.component.css']
})

export class HttpRoutingComponent implements OnInit {
  userName: string = '';
  url : string = 'https://api.github.com/users/';
  response: any;

  constructor(private http : HttpClient) {

   }

  ngOnInit() {

  }

  searchUser(){
    this.http.get(this.url+this.userName)
    .subscribe((response) => {
      this.response = response;
      console.log(response);
    })
  }

  
}
