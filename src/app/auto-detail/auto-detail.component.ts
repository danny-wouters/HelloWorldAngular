import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auto-detail',
  templateUrl: './auto-detail.component.html',
  styleUrls: ['./auto-detail.component.css']
})
export class AutoDetailComponent implements OnInit {
  public autoId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.autoId = id;
  }

}
