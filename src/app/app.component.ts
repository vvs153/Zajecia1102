import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CatFact, CATS_API_BASE_URL, CATS_API_ENDPOINT_FACTS_RANDOM} from "./cats-api/model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zajecia1102';
  odpowiedzServer: string = '';
  constructor(private httpClient: HttpClient) {
  }
 // private odbierzWynik(wynik: CatFact): void{
 // console.log("Wynik:")
  //  console.log(wynik)
   // this.odpowiedzServer= JSON.stringify(wynik)
 // }
  wywolajZapytanie(): void{
    console.log('hello biden');
    this.httpClient.get<CatFact>(CATS_API_BASE_URL+CATS_API_ENDPOINT_FACTS_RANDOM
    )
      .subscribe({
        next: wynik =>{
          console.log("odebrano wynik "+JSON.stringify(wynik))
          this.odpowiedzServer=JSON.stringify(wynik)
        }
        }
      )
  }
}
