import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{

  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = "SAIBA MAIS SOBRE DAVID"
  @Input()
  cardDescription:string = "Programador Front End, focado , David girou a chave da sua vida profissional proximo aos 40 anos, quando decidiu entrar de cabeça no mundo dos códigos e desenvolvimento."
  @Input()
  Id:string="0"
  
  constructor(){}
  ngOnInit(): void {

  }

}
