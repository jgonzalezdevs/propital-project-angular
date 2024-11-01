import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNotificationDeletionComponent } from './single-notification-deletion.component';

describe('SingleNotificationDeletionComponent', () => {
  let component: SingleNotificationDeletionComponent;
  let fixture: ComponentFixture<SingleNotificationDeletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleNotificationDeletionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleNotificationDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
