import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachParAdresseComponent } from './serach-par-adresse.component';

describe('SerachParAdresseComponent', () => {
  let component: SerachParAdresseComponent;
  let fixture: ComponentFixture<SerachParAdresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachParAdresseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachParAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
