import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { category } from '../../models/ia';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: category[] = [];

  constructor(private utilsService: UtilsService, private router: Router) {}
  ngOnInit(): void {
    this.categories = [...this.utilsService.getCategories()];
  }
  navigate(url: string, id: string) {
    this.router.navigate([`/${url}`, id]);
  }
}
