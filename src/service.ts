import { Injectable } from "@angular/core";

export interface CardClass {
  id: number;
  img: string;
  name: string;
  address: string;
  price: string;
  owner: string;
  guests: number;
}

export interface Build {
  id: number,
  positionTop: string,
  positionLeft: string,
  card: CardClass[]
}

export const building: Build[] = [
  {
    id: 100,
    positionTop: '130px',
    positionLeft: '100px',
    card: [
      {
        id: 1,
        img: 'ivanov1.jpg',
        name: 'Отель Иванов',
        address: 'г. Москва',
        price: '2500',
        owner: 'Андрей',
        guests: 2,
      },
      {
        id: 2,
        img: 'barintel.jpg',
        name: 'Баринтель',
        address: 'г. Москва',
        price: '2500',
        owner: 'Алексей',
        guests: 1
      }
    ]
  },
  {
    id: 200,
    positionTop: '200px',
    positionLeft: '200px',
    card: [
      {
        id: 3,
        img: 'paradnyi.jpg',
        name: 'Парадный',
        address: 'г. Москва',
        price: '2500',
        owner: 'Иван',
        guests: 3,
      }
    ]
  },
  {
    id: 300,
    positionTop: '250px',
    positionLeft: '650px',
    card: [
      {
        id: 4,
        img: 'moscow.jpg',
        name: 'Отель Москва',
        address: 'г. Москва',
        price: '2500',
        owner: 'Мария',
        guests: 5
      },
      {
        id: 5,
        img: 'hostel111.jpg',
        name: 'Отель 111',
        address: 'г. Москва',
        price: '2500',
        owner: 'Света',
        guests: 3
      }
    ]
  }
];


// export const newBuildingArr = (id: number) => building.reduce((res: any, el) => {
//   if (el.card.find(item => item.id === id)) {
//     res = el.card.find(item => item.id === id)
//   }
//   return res;
// }, {});

@Injectable({
  providedIn: 'root',
})
export class BuildService {

  getBuildId() { return localStorage.getItem('buildId') };

  getBuildingFilter(buildId: string | null) { return  building.filter(build => build.id === Number(buildId))[0].card }

  getNewCardArr() {
    return building.reduce((res: any, el, index, arr) => {
      res[index] = el.card
      return res.flat();
    }, []);
  }

  getNewBuildingArr(id: number) {
    return building.reduce((res: any, el) => {
      if (el.card.find(item => item.id === id)) {
        res = el.card.find(item => item.id === id)
      }
      return res;
    }, {});
  }

}
