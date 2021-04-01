import { Component, OnInit } from '@angular/core';
import { Bestelling } from '../_models/bestelling';
import { BestellingService } from '../_services/bestelling.service';

@Component({
  selector: 'app-bestelling-create',
  templateUrl: './bestelling-create.component.html',
  styleUrls: ['./bestelling-create.component.css']
})
export class BestellingCreateComponent implements OnInit {
  public bestelling: Bestelling = new Bestelling();
  public submitted: boolean = false;
  public postResponse: any;

  constructor(private _bestellingService: BestellingService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.bestelling.klantId = 1;
    this.bestelling.bestellingId = 0;
    this._bestellingService.addBestelling(this.bestelling)
      .subscribe(res => {this.postResponse = res});
    this.submitted = true;
  }

}
