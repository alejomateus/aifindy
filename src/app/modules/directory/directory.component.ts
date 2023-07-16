import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  data: any[] = [];
  tags: any[] = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
  ];
  constructor(private utilsService: UtilsService) {}
  ngOnInit() {
    this.data = this.utilsService.getData();
  }
  sort() {
    return 'badge text-bg-' + this.tags[Math.floor(Math.random() * this.tags.length)];
  }
}
