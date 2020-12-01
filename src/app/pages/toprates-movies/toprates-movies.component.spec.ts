import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopratesMoviesComponent } from './toprates-movies.component';

describe('TopratesMoviesComponent', () => {
  let component: TopratesMoviesComponent;
  let fixture: ComponentFixture<TopratesMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopratesMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopratesMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
