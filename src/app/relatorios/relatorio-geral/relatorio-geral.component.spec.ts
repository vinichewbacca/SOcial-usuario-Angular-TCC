import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioGeralComponent } from './relatorio-geral.component';

describe('RelatorioGeralComponent', () => {
  let component: RelatorioGeralComponent;
  let fixture: ComponentFixture<RelatorioGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioGeralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
