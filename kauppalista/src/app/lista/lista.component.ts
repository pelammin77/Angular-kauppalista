/*
Tiedosto: lista.component.ts
Tekijä: Petri Lamminaho 
Kuvaus:
      ListaComponent- luokan ts toteutus
      Hoitaa listan ylläpitämisen  
      kutsuu service luokaa kun tarvitsee tehdä muutoksia localstorageen

*/
// -------------------------------------------------
import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import{TuoteService } from '../tuote.service';
// ------------------------------------------------
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

// -----------------------------------------------------------------------------------------------------------------------
export class ListaComponent implements OnInit {
// -----------------------------------------------------------------------------------------------------------------------
// luokan muuttujat
// ------------------------------------------------------------------------------------------------------------------------
   tuotteet;  // lista array
   nimi = '';
   vanhaNimi = ' ';
   ohjelmanTila = 'default';
// -------------------------------------------------------------------------------------------------------------------------
  constructor(private _tuoteService: TuoteService) { } //  contructor luo lukalle private TuoteService tyyppisen muuttujan


// ngOnInit: Angularin oma metodi jota kutsutaan kun luokka luodaan
// -------------------------------------------------------------------------------  
  ngOnInit() {

    this.tuotteet = this._tuoteService.haeTuoteet(); // hakee tuoteet listaan storagesta kun sovellus ladataan
  }
// ------------------------------------------------------------------------------------------------------------------
// luo tuoteen ja lisää sen  listaan
// ------------------------------------------------------------------------------------------------------------------
lisaaTuote() {

      if (this.nimi === '') { // jos annetaan tyhjä merkkijono -> ei tallenneta
        return;
      }
     this.tuotteet.push({
      text: this.nimi
       });

      const uusiTuote = { // luodssn uusi tuote
        text: this.nimi
      };
   this._tuoteService.tallenaTuoteet(uusiTuote); // viedään tuote serviselle joka tekee temput
   this.nimi = ''; // tyhjätään tekstikenttä
 }
// ---------------------------------------------------------------------------------------------------
// Poistaa  totee listasta
// -------------------------------------------------------------------------------------------------
   poistaTuote(tuoteenText) {

    for (let i = 0; i < this.tuotteet.length; i++) { // käy listan läpi
      if ( this.tuotteet[i].text === tuoteenText) {// etsii  tuoteen listasta tekstin perusteella
         this.tuotteet.splice (i, 1 );
       }
    }
   this._tuoteService.poistaTuote(tuoteenText); // kutsuu serviceä joka tekee temput
 }
// --------------------------------------------------------------------------------------------
// Muokkaa tuoteen tietoja
// -----------------------------------------------------------------------------------------------
muokkaa(muokattavaTuote ) {

    this.ohjelmanTila = 'edit';
    this.nimi = muokattavaTuote.text;
    this.vanhaNimi = muokattavaTuote.text;
    this.nimi = muokattavaTuote.text;
}
// ----------------------------------------------------------------------------------
// Päivittää tuoteen tiedot listaan
// ---------------------------------------------------------------------------------
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
// -----------------------------------------------------------------------------------
}// luokan loppu
