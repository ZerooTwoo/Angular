import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCollumnComponent } from './add-collumn.component';

describe('AddCollumnComponent', () => {
  let component: AddCollumnComponent;
  let fixture: ComponentFixture<AddCollumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCollumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCollumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
