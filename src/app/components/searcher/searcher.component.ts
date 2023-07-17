import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
})
export class SearcherComponent {
  data: any[];
  searcher: string = '';
  dataFiltered: any[];
  constructor(
    public activeModal: NgbActiveModal,
    private utilsService: UtilsService
  ) {}
  ngOnInit() {
    this.data = [...this.utilsService.getData()];
  }
  search() {
    if (this.searcher !== '') {
      this.dataFiltered = [...this.utilsService.getData()].filter((item) => {
        const text = item.title.trim();
        if (text.includes(this.searcher.trim())) {
          return item;
        }
      });
    } else {
      this.dataFiltered = [];
    }
  }
}
