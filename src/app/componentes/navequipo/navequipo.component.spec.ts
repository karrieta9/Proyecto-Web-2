import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavequipoComponent } from './navequipo.component';

describe('NavequipoComponent', () => {
  let component: NavequipoComponent;
  let fixture: ComponentFixture<NavequipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavequipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
