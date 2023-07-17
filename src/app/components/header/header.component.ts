import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SearcherComponent } from '../searcher/searcher.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router, private modalService: NgbModal) {}
  navigate(url: string) {
    this.router.navigate([`/${url}`]);
  }
  open() {
    console.log("modal");

    this.modalService.open(SearcherComponent);
  }
}
