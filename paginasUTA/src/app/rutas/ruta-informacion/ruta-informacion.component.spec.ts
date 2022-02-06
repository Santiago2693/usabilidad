import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaInformacionComponent } from './ruta-informacion.component';

describe('RutaInformacionComponent', () => {
  let component: RutaInformacionComponent;
  let fixture: ComponentFixture<RutaInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaInformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
