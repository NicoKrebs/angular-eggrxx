import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sabw-caesar',
  templateUrl: './sabw-caesar.component.html',
  styleUrls: ['./sabw-caesar.component.css']
})
export class SabwCaesarComponent implements OnInit {
zahl= 12;
rotation='rotate(318,46deg)'
dreheScheibe(){
  console.log('Hallo');
}




  constructor() { }

  ngOnInit() {
  }

}