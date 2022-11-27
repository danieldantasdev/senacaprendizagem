import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineListaComponent } from './timeline-lista.component';

describe('TimelineListaComponent', () => {
  let component: TimelineListaComponent;
  let fixture: ComponentFixture<TimelineListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineListaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
