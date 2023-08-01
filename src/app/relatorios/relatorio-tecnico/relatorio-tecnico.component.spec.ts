import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioTecnicoComponent } from './relatorio-tecnico.component';

describe('RelatorioTecnicoComponent', () => {
  let component: RelatorioTecnicoComponent;
  let fixture: ComponentFixture<RelatorioTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioTecnicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
