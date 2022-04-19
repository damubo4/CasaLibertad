import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcogidaComponent } from './acogida.component';

describe('AcogidaComponent', () => {
  let component: AcogidaComponent;
  let fixture: ComponentFixture<AcogidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcogidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcogidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
