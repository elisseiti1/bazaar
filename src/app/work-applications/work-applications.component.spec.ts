import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkApplicationsComponent } from './work-applications.component';

describe('WorkApplicationsComponent', () => {
  let component: WorkApplicationsComponent;
  let fixture: ComponentFixture<WorkApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
