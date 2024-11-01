import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDeletionComponent } from './notification-deletion.component';

describe('NotificationDeletionComponent', () => {
  let component: NotificationDeletionComponent;
  let fixture: ComponentFixture<NotificationDeletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationDeletionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
