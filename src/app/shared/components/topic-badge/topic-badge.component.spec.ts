import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicBadgeComponent } from './topic-badge.component';

describe('TopicBadgeComponent', () => {
  let component: TopicBadgeComponent;
  let fixture: ComponentFixture<TopicBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
