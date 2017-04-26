import { Injectable } from '@angular/core';

@Injectable()
export class TuoteService {

  constructor() {
     console.log('Ladataan.....');
   }


   haeTuoteet() {

     let tuoteet = JSON.parse( localStorage.getItem('tuoteet'));
     if (tuoteet == null ) {
       console.log('Lista tyhja');
       tuoteet = [];
       }
     return tuoteet;

 }

  tallenaTuoteet(tuote) {

    let tuoteet = JSON.parse(localStorage.getItem('tuoteet'));
     if (tuoteet == null) {tuoteet = []; }
    tuoteet.push(tuote);
    console.log('tallenetaam');

  localStorage.setItem('tuoteet', JSON.stringify(tuoteet));

}

poistaTuote(tuoteenText) {

  const tuotteet = JSON.parse(localStorage.getItem('tuoteet'));
      for (let i = 0; i < tuotteet.length; i++) {
        if ( tuotteet[i].text === tuoteenText) {
         tuotteet.splice(i, 1);
         }
       }
         localStorage.setItem('tuoteet', JSON.stringify(tuotteet));

 }

paivita(vanhaNimi, uusiNimi) {

  const tuotteet = JSON.parse(localStorage.getItem('tuoteet'));

      for (let i = 0; i < tuotteet.length; i++) {
        if ( tuotteet[i].text === vanhaNimi) {
         ( tuotteet[i].text = uusiNimi);
         }
       }
         localStorage.setItem('tuoteet', JSON.stringify(tuotteet));

 }


}
