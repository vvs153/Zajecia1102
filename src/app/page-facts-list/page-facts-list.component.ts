import { Component } from '@angular/core';
import {CatFact, CATS_API_BASE_URL, CATS_API_ENDPOINT_FACTS_RANDOM} from "../cats-api/model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-page-facts-list',
  templateUrl: './page-facts-list.component.html',
  styleUrls: ['./page-facts-list.component.css']
})
export class PageFactsListComponent {
  factsList: CatFact[] = []
  numberOfFacts: number = 0
  columns : string[] =[
    'cat-fact-id',
    'cat-fact-text',
    'cat-fact-details'
  ]
  constructor(private http: HttpClient) {

     }

  getFacts(){
    this.http.get<CatFact[]>(CATS_API_BASE_URL+CATS_API_ENDPOINT_FACTS_RANDOM,
      {
        params:{
          amount: this.numberOfFacts
        }
      }).subscribe({
      next: value => { //jesli sukecs to wywolaj
        console.log("Pobrano fakty")
        this.factsList = [...value]
      },
      error: err => { //jesli blad to wypisz ten blokmkodu
        console.log("blad")
      }
    })
  }
}
