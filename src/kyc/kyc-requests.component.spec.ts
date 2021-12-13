import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerKycRequestsComponent } from './seeker-kyc-requests.component';

describe('SeekerKycRequestsComponent', () => {
  let component: SeekerKycRequestsComponent;
  let fixture: ComponentFixture<SeekerKycRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerKycRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerKycRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});