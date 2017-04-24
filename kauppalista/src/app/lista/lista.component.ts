import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
   tuotteet;
   nimi;
  constructor() { }

  ngOnInit() {

    this.tuotteet = [];
  }

    lisaaTuote(){
     this.tuotteet.push({
      text: this.nimi
       })
    }


   poistaTuote(tuoteenText){
      for(let i = 0; i < this.tuotteet.length; i++){
        if( this.tuotteet[i].text === tuoteenText){
         this.tuotteet.splice(i, 1)
         }
       }
     }
  }
