import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Hero } from './../shared/models/hero';
import { HeroService } from './../shared/services/hero.service';

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.css']
})
export class HeroesTableComponent implements OnInit{

  displayedColumns: string[];
  dataSource: MatTableDataSource<Hero>;
  @ViewChild(MatSort) sort: MatSort;
  isLoadingResults: boolean = true;

  constructor(private heroService: HeroService) {
    this.displayedColumns = [
      'icon',
      'localized_name',
      'base_str',
      'base_agi',
      'base_int',
      'primary_attr',
      'base_attack_max',
      'attack_rate',
      'attack_range',
      'base_armor',
      'move_speed',
      'base_health_regen',
    ];    
  }

  ngOnInit() {
    this.loadTable();
  }

  loadTable():void {
    this.heroService.getHeroes()
      .subscribe((heroes) => {
        this.isLoadingResults = false;
        this.dataSource = new MatTableDataSource<Hero>(heroes);
        this.configFilter();
        this.configSort();
      });
  }

  configFilter() {
    this.dataSource.filterPredicate = (data: Hero, filter: string) => {      
      let regex = new RegExp(`^${filter}`);
      return regex.test(data.localized_name.toLowerCase());
    }
  }

  configSort() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

}
