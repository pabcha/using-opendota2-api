import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterHeroComponent } from './filter-hero.component';

describe('FilterHeroComponent', () => {
  let component: FilterHeroComponent;
  let fixture: ComponentFixture<FilterHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
