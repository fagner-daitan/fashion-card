import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionBoxComponent } from './fashion-box.component';

describe('FashionBoxComponent', () => {
  let component: FashionBoxComponent;
  let fixture: ComponentFixture<FashionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
