import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesTableComponent } from './heroes-table.component';

describe('HeroesTableComponent', () => {
  let component: HeroesTableComponent;
  let fixture: ComponentFixture<HeroesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
