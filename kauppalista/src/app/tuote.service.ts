/*
   tiedosto: tuote.service.ts
   tekijä Petri Lamminaho

   Kuvaus: TuoteService- luokka
           Hoitaa tuoteen tallennuksen poiston ja muokkauksen.
           Keskustee selaimen locastoragen kanssa
*/
import { Injectable } from '@angular/core';

@Injectable()
export class TuoteService {

  constructor() {
     console.log('Ladataan.....');
   }

// ---------------------------------------------------------------------------------------------------------------------
// Hakee tuoteet listaan storagesta
// ---------------------------------------------------------------------------------------------------------------------
   haeTuoteet() {

     let tuoteet = JSON.parse( localStorage.getItem('tuoteet'));
     if (tuoteet == null ) {
       console.log('Listaa ei ole luotu. Luodaan...');
       tuoteet = [];
       console.log('Tyhjä lista luotiin onnistuneesti'); 
       }
     return tuoteet;

 }
// -------------------------------------------------------------------------------------------------------
// Tallentaa uuden tuoteen listaan
// -------------------------------------------------------------------------------------------------------
  tallenaTuoteet(tuote) {

    let tuoteet = JSON.parse(localStorage.getItem('tuoteet')); // hakee listan 
     if (tuoteet == null)
      {
        tuoteet = []; // luo tyhjän  listan
      }
    tuoteet.push(tuote); // lisää tuoteen listaan 
    console.log('tallenetaam');

  localStorage.setItem('tuoteet', JSON.stringify(tuoteet)); // tallentaa muuttuneen lista dtorageen 

}
// -------------------------------------------------------------------------------------------------
// poistaa tuoteen 
// --------------------------------------------------------------------------------------------------
poistaTuote(tuoteenText) {

  const tuotteet = JSON.parse(localStorage.getItem('tuoteet'));// hakee listan
      for (let i = 0; i < tuotteet.length; i++) { // käy listan läpi
        if ( tuotteet[i].text === tuoteenText) { // kun lötää postevan tuotee ...
         tuotteet.splice(i, 1); // poistaa tuoteenn
         }
       }
         localStorage.setItem('tuoteet', JSON.stringify(tuotteet)); // päivittää listan 

 }

// ---------------------------------------------------------------------------------------------------------
// päivitää muokatun listan
// ----------------------------------------------------------------------------------------------------------
paivita(vanhaNimi, uusiNimi) {

  const tuotteet = JSON.parse(localStorage.getItem('tuoteet')); // hakee listan storagesta

      for (let i = 0; i < tuotteet.length; i++) {  // käy listan läpi 
        if ( tuotteet[i].text === vanhaNimi) {    // etsii muokattavan tupteen textin perusteella
         ( tuotteet[i].text = uusiNimi);         // muutaa tuoteen tekstin uudeksi 
         }
       }
         localStorage.setItem('tuoteet', JSON.stringify(tuotteet));// päivittää listan 

 }
// -------------------------------------------------------------------------------------------------------

}
// Luokan loppu 