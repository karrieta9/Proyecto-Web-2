import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidodetalleComponent } from './partidodetalle.component';

describe('PartidodetalleComponent', () => {
  let component: PartidodetalleComponent;
  let fixture: ComponentFixture<PartidodetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidodetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
