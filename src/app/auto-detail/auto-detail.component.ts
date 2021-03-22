import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-auto-detail',
  templateUrl: './auto-detail.component.html',
  styleUrls: ['./auto-detail.component.css']
})
export class AutoDetailComponent implements OnInit {
  public autoId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.autoId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id: number = parseInt(params.get('id'));
      this.autoId = id;
    })
  }

  goPrevious(): void {
    let previousId = this.autoId - 1;
    this.router.navigate(["autos", previousId]);
  }

  goNext(): void {
    let previousId = this.autoId + 1;
    this.router.navigate(["autos", previousId]);
  }
}
