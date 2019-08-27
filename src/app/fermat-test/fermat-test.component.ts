import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fermat-test',
  templateUrl: './fermat-test.component.html',
  styleUrls: ['./fermat-test.component.css']
})
export class FermatTestComponent implements OnInit {


  versuchskaninchen: number = 10;
  Anzahl: number = 5;
  ergebnis = "N/A"
  constructor() { }
  fermattest() {
    this.ergebnis = 'starte Fermattest der Zahl' + this.versuchskaninchen + '... ';
    let zeuge = 2;
    // Berechne zeuge ^(versuchskaninchen-1) modulo versuchskaninchen
    let zwischenergebnis = 1;
    for (let i = 0; i < this.versuchskaninchen - 1; i++) {
      zwischenergebnis = zwischenergebnis * zeuge;

    }
    zwischenergebnis = zwischenergebnis % this.versuchskaninchen;
    if (zwischenergebnis === 1) {
      this.ergebnis += 'zeuge' + zeuge + 'Ok... ';
    } else {
      this.ergebnis += 'zeuge' + zeuge + 'Nicht Ok!';
    }
  }


  ngOnInit() {
  }

}