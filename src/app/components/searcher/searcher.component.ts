import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
})
export class SearcherComponent {
  searcher: string = '';
  dataFiltered: any[] = [];
  constructor(
    public activeModal: NgbActiveModal,
    private utilsService: UtilsService
  ) {}


  getTemplateMode(): string {
    return localStorage.getItem('templateMode') || 'light';
  }

  search() {
    if (this.searcher !== '') {
      this.dataFiltered = [...this.utilsService.getData()].filter(
        (item: any) => {
          const text = item.title.toLocaleLowerCase().trim();
          if (text.includes(this.searcher.toLocaleLowerCase().trim())) {
            return item;
          }
        }
      );
    } else {
      this.dataFiltered = [];
    }
  }
}
