import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SearcherComponent } from '../searcher/searcher.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  templateMode: string;
  templateInput: boolean = true;
  constructor(private router: Router, private modalService: NgbModal) {}
  ngOnInit(): void {
    this.templateMode = this.getTemplateMode();
  }
  navigate(url: string) {
    this.router.navigate([`/${url}`]);
  }
  open(): void {
    this.modalService.open(SearcherComponent);
  }
  getTemplateMode(): string {
    return localStorage.getItem('templateMode') === 'light' ? 'dark' : 'light';
  }

  setTemplateMode(): void {
    localStorage.setItem(
      'templateMode',
      this.templateMode === 'light' ? 'light' : 'dark'
    );
    this.templateMode = this.getTemplateMode();
  }
}
