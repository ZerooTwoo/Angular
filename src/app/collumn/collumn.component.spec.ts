import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollumnComponent } from './collumn.component';

describe('CollumnComponent', () => {
  let component: CollumnComponent;
  let fixture: ComponentFixture<CollumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
