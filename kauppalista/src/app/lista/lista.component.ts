import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import{TuoteService } from '../tuote.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']

})
export class ListaComponent implements OnInit {
   tuotteet;
   nimi = '';
   vanhaNimi;
   ohjelmanTila = 'default';
  constructor(private _tuoteService: TuoteService) { }

  ngOnInit() {
    this.tuotteet = this._tuoteService.haeTuoteet();
  }

    lisaaTuote() {

      if (this.nimi === '') {
        return;
      }
     this.tuotteet.push({
      text: this.nimi
       });
      const uusiTuote = {

        text: this.nimi
      };

  this._tuoteService.tallenaTuoteet(uusiTuote);
   this.nimi = '';
 }


   poistaTuote(tuoteenText) {

      for (let i = 0; i < this.tuotteet.length; i++) {
        if ( this.tuotteet[i].text === tuoteenText) {
          this.tuotteet.splice (i, 1 );
         }
       }
      this._tuoteService.poistaTuote(tuoteenText);
   }

muokkaa(muokattavaTuote ) {

    this.ohjelmanTila = 'edit';
    this.nimi = muokattavaTuote.text;
    this.vanhaNimi = muokattavaTuote.text;
    this.nimi = muokattavaTuote.text;
}

    paivitaTuote() {

    console.log('Päivitetään tiedot');
     for (let i = 0; i < this.tuotteet.length; i++) {
        if ( this.tuotteet[i].text === this.vanhaNimi) {
          this.tuotteet[i].text = this.nimi;
         }
       }

    this._tuoteService.paivita(this.vanhaNimi, this.nimi);
    this.ohjelmanTila = 'default';
    this.nimi = '';
}


}
