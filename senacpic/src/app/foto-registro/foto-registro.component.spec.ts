import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoRegistroComponent } from './foto-registro.component';

describe('FotoRegistroComponent', () => {
  let component: FotoRegistroComponent;
  let fixture: ComponentFixture<FotoRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
