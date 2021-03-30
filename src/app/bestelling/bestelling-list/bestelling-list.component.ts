import { Component, OnInit } from '@angular/core';
import { Bestelling } from '../_models/bestelling';
import { BestellingService } from '../_services/bestelling.service';

@Component({
  selector: 'app-bestelling-list',
  templateUrl: './bestelling-list.component.html',
  styleUrls: ['./bestelling-list.component.css']
})
export class BestellingListComponent implements OnInit {
  public bestellingen : Bestelling[] = [];

  constructor(private _bestellingService: BestellingService) { }

  ngOnInit(): void {
    this._bestellingService.getBestellingen().subscribe(
      (res) => {this.bestellingen = res}
    );
  }

}
