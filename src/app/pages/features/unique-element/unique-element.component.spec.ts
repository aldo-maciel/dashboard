import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueElementComponent } from './unique-element.component';

describe('UniqueElementComponent', () => {
  let component: UniqueElementComponent;
  let fixture: ComponentFixture<UniqueElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
