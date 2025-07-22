import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlabsComponent } from './vlabs.component';

describe('VlabsComponent', () => {
  let component: VlabsComponent;
  let fixture: ComponentFixture<VlabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VlabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VlabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
