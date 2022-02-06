import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraFinalComponent } from './barra-final.component';

describe('BarraFinalComponent', () => {
  let component: BarraFinalComponent;
  let fixture: ComponentFixture<BarraFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
