import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebyComponent } from './deby.component';

describe('DebyComponent', () => {
  let component: DebyComponent;
  let fixture: ComponentFixture<DebyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
