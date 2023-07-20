import { Component, OnInit } from '@angular/core';
import { IA, IAType, accessType } from '../../models/ia';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
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
  IATypes: IAType[] = [
    {
      name: 'De Pago',
      active: false,
    },
    {
      name: 'Gratis',
      active: false,
    },
    {
      name: 'Freemium',
      active: false,
    },
    {
      name: 'Free Trial',
      active: false,
    },
  ];
  constructor(private utilsService: UtilsService) {}
  ngOnInit() {
    this.data = this.utilsService.getData();
  }
  sort(): string {
    return (
      'badge text-bg-' + this.tags[Math.floor(Math.random() * this.tags.length)]
    );
  }
  changeStatus(index: number): void {
    this.IATypes[index].active = !this.IATypes[index].active;
    let allTypes = false;
    this.data = [...this.utilsService.getData()].filter((ia: any) => {
      for (let i = 0; i < this.IATypes.length; i++) {
        if (this.IATypes[i].active && this.IATypes[i].name === ia.accessType) {
          return ia;
        }
        if (this.IATypes[i].active) {
          allTypes = true;
        }
      }
    });
    if (allTypes == false) {
      this.data = [...this.utilsService.getData()];
    }
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
      default:
        break;
    }
    return cssClass;
  }
}
