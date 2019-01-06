import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  @Input() data;
  @Input() columns;
  lockedColumns;
  unlockedColumns;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.lockedColumns = this.columns.filter(col => col.locked);
    this.unlockedColumns = this.columns.filter(col => !col.locked);
  }
}
