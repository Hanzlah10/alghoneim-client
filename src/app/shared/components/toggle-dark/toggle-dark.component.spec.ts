import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleDarkComponent } from './toggle-dark.component';

describe('ToggleDarkComponent', () => {
  let component: ToggleDarkComponent;
  let fixture: ComponentFixture<ToggleDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleDarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
