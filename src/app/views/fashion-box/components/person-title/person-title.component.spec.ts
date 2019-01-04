import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTitleComponent } from './person-title.component';

describe('PersonTitleComponent', () => {
  let component: PersonTitleComponent;
  let fixture: ComponentFixture<PersonTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
