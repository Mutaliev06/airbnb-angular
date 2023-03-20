import { Component, OnInit } from '@angular/core';

export interface ICardClass {
  id: number;
  img: string;
  name: string;
  address: string;
  price: string
}

export const housing:ICardClass[] = [
  {
    id: 1,
    img: '123',
    name: 'Отель Иванов',
    address: 'г. Москва',
    price: '2500'
  },
  {
    id: 2,
    img: '123',
    name: 'Баринтель',
    address: 'г. Москва',
    price: '2500'
  },
  {
    id: 3,
    img: '123',
    name: 'Парадный',
    address: 'г. Москва',
    price: '2500'
  },
  {
    id: 4,
    img: '123',
    name: 'Отель Москва',
    address: 'г. Москва',
    price: '2500'
  },
  {
    id: 5,
    img: '123',
    name: 'Отель 111',
    address: 'г. Москва',
    price: '2500'
  }
];

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit{
  housing: ICardClass[];

  constructor() {
    this.housing = [];
  }

  ngOnInit() {
    this.housing = housing;
  }
}
