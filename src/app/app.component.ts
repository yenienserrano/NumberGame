import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Podras adivinar el numero??';
  number: number;
  estado: string;
  numeroSeleccionado: number;

  constructor(){
  }

  ngOnInit(): void{
    this.numeroRandom()   
  }

  verificarNumero(){
    if(this.numeroSeleccionado > this.number){
      this.estado = "bajo"
      this.number = null

    }else if(this.numeroSeleccionado < this.number){
      this.estado = "alto"
      this.number = null
    }else{
      this.estado = "correcto"
      this.number = null
    }
  }

  numeroRandom(){
    var aleatorio = Math.round(Math.random()*100);
    this.numeroSeleccionado = aleatorio
    this.estado = ''
    this.number = null
  }

}
