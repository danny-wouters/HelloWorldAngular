import { Injectable } from '@angular/core';
import { Auto } from '../_models/auto';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  private autos:Auto[];

  constructor() {
    this.autos = [
      new Auto(1, "Opel", "Astra"),
      new Auto(2, "Ford", "Focus"),
      new Auto(3, "Volkswagen", "Golf"),
      new Auto(4, "Renault", "Mégane")
    ];
  }

  getAutos() : Auto[] {
    return this.autos;
  }
}
