import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';

const NO_OF_COLUMNS = 20;
const NO_OF_STICKY_COLUMNS = 3;
const NO_OF_ROWS = 50;

@Component({
  selector: 'my-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements AfterViewInit {
  columns;
  data;

  @ViewChild('headerRow') headerRowEl: ElementRef;

  ngAfterViewInit() {
    let ths = this.headerRowEl.nativeElement.children;
    for (let th of ths) {
      th.style.left = `${th.getBoundingClientRect().x}px`;
    }
  }

  constructor() {
    this.columns = this.generateColumns();
    this.data = this.generateData(this.columns);
  }

  generateColumns() {
    let columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        sticky: true
      }
    ];

    for (let i = 0; i < NO_OF_COLUMNS; i++) {
      let colObj = {
        title: `Columns ${i}`,
        dataIndex: `column_${i}`,
        sticky: i < NO_OF_STICKY_COLUMNS
      };

      columns.push(colObj);
    }

    return columns;
  }

  generateData(columns) {
    let data = [];
    let keys = columns.map(c => c.dataIndex);

    for (let i = 0; i < NO_OF_ROWS; i++) {
      let obj = {};

      for (let key of keys) {
        obj[key] = key === 'id' ? i : `${key} - ${i}`;
      }

      data.push(obj);
    }

    return data;
  }
}
