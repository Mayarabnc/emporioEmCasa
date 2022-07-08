import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacaSeuPedidoComponent } from './faca-seu-pedido.component';

describe('FacaSeuPedidoComponent', () => {
  let component: FacaSeuPedidoComponent;
  let fixture: ComponentFixture<FacaSeuPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacaSeuPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacaSeuPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
