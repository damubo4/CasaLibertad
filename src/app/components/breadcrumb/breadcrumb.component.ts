import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  route: string;


  constructor(private router: Router,
              private location: Location,
              ) {
                router.events.subscribe(() => {
                    this.route = location.path();
                });
               }

  ngOnInit(): void {
  }

}
