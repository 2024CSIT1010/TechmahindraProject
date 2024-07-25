import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRepsComponent } from './service-reps.component';

describe('ServiceRepsComponent', () => {
  let component: ServiceRepsComponent;
  let fixture: ComponentFixture<ServiceRepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceRepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceRepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
