import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  data: any[] = [];
  tags: string[] = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
  ];
  IATypes: any[] = [
    {
      name: 'De Pago',
      active: false,
    },
    {
      name: 'Gratis',
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
  changeStatus(index: number) {
    this.IATypes[index].active = !this.IATypes[index].active;

    this.data = [...this.utilsService.getData()].filter((item) => {
      if (!this.IATypes[1].active && !this.IATypes[0].active) {
        return item;
      }
      if (this.IATypes[1].active && !item.price) {
        return item;
      }
      if (this.IATypes[0].active && item.price) {
        return item;
      }

    });
  }
}
