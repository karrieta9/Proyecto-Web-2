import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadordetalleComponent } from './jugadordetalle.component';

describe('JugadordetalleComponent', () => {
  let component: JugadordetalleComponent;
  let fixture: ComponentFixture<JugadordetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadordetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadordetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
