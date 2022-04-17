import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachParPrenomComponent } from './serach-par-prenom.component';

describe('SerachParPrenomComponent', () => {
  let component: SerachParPrenomComponent;
  let fixture: ComponentFixture<SerachParPrenomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachParPrenomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachParPrenomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
