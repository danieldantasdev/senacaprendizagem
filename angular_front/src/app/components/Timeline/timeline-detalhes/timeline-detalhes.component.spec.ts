import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineDetalhesComponent } from './timeline-detalhes.component';

describe('TimelineDetalhesComponent', () => {
  let component: TimelineDetalhesComponent;
  let fixture: ComponentFixture<TimelineDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
