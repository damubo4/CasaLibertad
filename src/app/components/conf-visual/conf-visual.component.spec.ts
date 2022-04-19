import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfVisualComponent } from './conf-visual.component';

describe('ConfVisualComponent', () => {
  let component: ConfVisualComponent;
  let fixture: ComponentFixture<ConfVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfVisualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
