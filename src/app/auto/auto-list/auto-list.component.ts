import { Component, OnInit } from '@angular/core';
import { AutoService } from '../../auto.service';
import { Auto } from '../../_models/auto';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.css']
})
export class AutoListComponent implements OnInit {
  public autos : Auto[];
  public selectedId: number;

  constructor(private _autoService: AutoService, private router: Router, private route: ActivatedRoute) {
    this.autos = _autoService.getAutos();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id: number = parseInt(params.get('id'));
      this.selectedId = id;
    })
  }

  onSelect(auto: Auto): void {
    this.router.navigate(['/autos', auto.Id]);
  }

  isSelected(auto: Auto): boolean {
    return auto.Id === this.selectedId;
  }
}
