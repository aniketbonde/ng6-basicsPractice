import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  phones : String[];
  isCollapsed : boolean = true;

  constructor() {
    this.phones = ['9579968294','8208986104'];
   }

  ngOnInit() {
  }

  changeFlag(){
    this.isCollapsed = !this.isCollapsed;
  }

}
