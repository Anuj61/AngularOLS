import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelRoleComponent } from './del-role.component';

describe('DelRoleComponent', () => {
  let component: DelRoleComponent;
  let fixture: ComponentFixture<DelRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
