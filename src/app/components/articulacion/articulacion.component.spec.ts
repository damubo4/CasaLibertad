import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulacionComponent } from './articulacion.component';

describe('ArticulacionComponent', () => {
  let component: ArticulacionComponent;
  let fixture: ComponentFixture<ArticulacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
