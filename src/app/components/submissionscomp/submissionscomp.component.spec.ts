import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionscompComponent } from './submissionscomp.component';

describe('SubmissionscompComponent', () => {
  let component: SubmissionscompComponent;
  let fixture: ComponentFixture<SubmissionscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionscompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
