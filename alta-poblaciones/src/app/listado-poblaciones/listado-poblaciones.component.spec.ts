import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPoblacionesComponent } from './listado-poblaciones.component';

describe('ListadoPoblacionesComponent', () => {
  let component: ListadoPoblacionesComponent;
  let fixture: ComponentFixture<ListadoPoblacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPoblacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPoblacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
