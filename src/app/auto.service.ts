import { Injectable } from '@angular/core';
import { Auto } from './_models/auto';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  private autos:Auto[];

  constructor() {
    this.autos = [
      new Auto("Opel", "Astra"),
      new Auto("Ford", "Focus"),
      new Auto("Volkswagen", "Golf"),
      new Auto("Renault", "Mégane")
    ];
  }

  getAutos() : Auto[] {
    return this.autos;
  }
}
