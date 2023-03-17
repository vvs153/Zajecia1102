import { Component } from '@angular/core';
import {CatFact, CATS_API_BASE_URL, CATS_API_ENDPOINT_FACTS_RANDOM} from "../cats-api/model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cat-facts-list',
  templateUrl: './cat-facts-list.component.html',
  styleUrls: ['./cat-facts-list.component.css']
})
export class CatFactsListComponent {
  // factsList: CatFact[] = []
  //intIloscFaktow: number = 0
  //columns : string[] =[
//'cat-fact-id',
  //  'cat-fact-text',
    //'cat-fact-details'
 // ]
  //constructor(private http: HttpClient) {

 // }
  //pobierzFakty(){
   // this.http.get<CatFact[]>(CATS_API_BASE_URL+CATS_API_ENDPOINT_FACTS_RANDOM,
    //  {
      //  params:{
        //  amount: this.intIloscFaktow
        //}
      //}).subscribe({
     // next: value => { //jesli sukecs to wywolaj
       // console.log("Pobrano fakty")
       // this.factsList = [...value]
      //},
      //error: err => { //jesli blad to wypisz ten blokmkodu
        //console.log("blad")
     // }
   // })
  //}
}
