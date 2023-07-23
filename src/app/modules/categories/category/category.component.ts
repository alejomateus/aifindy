import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IA, accessType, category } from '../../../models/ia';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  id: string | null;
  category: category;
  data: IA[] = [];
  tags: string[] = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private utilsService: UtilsService
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.category = [...this.utilsService.getCategories()].find(
      (category) => (category.name = this.id)
    );
    console.log(this.category);
    this.data = [...this.utilsService.getData()].filter((item: any) => {
      for (let index = 0; index < item.tags.length; index++) {
        const element = item.tags[index];
        if (element === this.category.name) {
          return item;
        }
      }
    });
  }
  navigate(url: string) {
    this.router.navigate([`/${url}`]);
  }
  sort(): string {
    return (
      'badge text-bg-' + this.tags[Math.floor(Math.random() * this.tags.length)]
    );
  }
  getClass(accessType: accessType) {
    let cssClass = 'badge text-bg-';
    switch (accessType) {
      case 'De Pago':
        cssClass += this.tags[2];
        break;
      case 'Free Trial':
        cssClass += this.tags[4];
        break;
      case 'Freemium':
        cssClass += this.tags[5];
        break;
      case 'Gratis':
        cssClass += this.tags[3];
        break;
    }
    return cssClass;
  }
  getTemplateMode(): string {
    return localStorage.getItem('templateMode') || 'light';
  }
}
