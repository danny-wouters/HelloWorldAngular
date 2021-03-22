import { Component, OnInit } from '@angular/core';
import { AutoService } from '../auto.service';
import { Auto } from '../_models/auto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.css']
})
export class AutoListComponent implements OnInit {
  public autos : Auto[]

  constructor(private _autoService: AutoService, private router: Router) {
    this.autos = _autoService.getAutos();
  }

  ngOnInit(): void {
  }

  onSelect(auto: Auto): void {
    this.router.navigate(['/autos', auto.Id]);
  }

}
