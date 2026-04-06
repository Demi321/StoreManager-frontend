import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazView } from './interfaz-view';

describe('InterfazView', () => {
  let component: InterfazView;
  let fixture: ComponentFixture<InterfazView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfazView],
    }).compileComponents();

    fixture = TestBed.createComponent(InterfazView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
