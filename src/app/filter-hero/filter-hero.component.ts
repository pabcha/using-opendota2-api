import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-hero',
  templateUrl: './filter-hero.component.html',
  styleUrls: ['./filter-hero.component.css']
})
export class FilterHeroComponent {

  @Output() filterEntered: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  applyFilter(value): void {
    this.filterEntered.emit(value);
  }

}
