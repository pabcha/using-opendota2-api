import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotaToolbarComponent } from './dota-toolbar.component';

describe('DotaToolbarComponent', () => {
  let component: DotaToolbarComponent;
  let fixture: ComponentFixture<DotaToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotaToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
