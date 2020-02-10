export class Package {

  constructor(public id: number,
              public title: string,
              public type: number,
              public withTrain: boolean,
              public housing: string,
              public food: string,
              public stars: number,
              public acType: string,
              public noMahram: boolean,
              public price: number) {
  }
}
