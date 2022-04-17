import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreParCategorieComponent } from './filtre-par-categorie.component';

describe('FiltreParCategorieComponent', () => {
  let component: FiltreParCategorieComponent;
  let fixture: ComponentFixture<FiltreParCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltreParCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltreParCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
