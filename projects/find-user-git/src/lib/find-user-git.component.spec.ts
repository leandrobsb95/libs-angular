import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindUserGitComponent } from './find-user-git.component';

describe('FindUserGitComponent', () => {
  let component: FindUserGitComponent;
  let fixture: ComponentFixture<FindUserGitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindUserGitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindUserGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
