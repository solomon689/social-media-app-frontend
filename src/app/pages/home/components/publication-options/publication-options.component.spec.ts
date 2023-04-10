import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationOptionsComponent } from './publication-options.component';

describe('PublicationOptionsComponent', () => {
  let component: PublicationOptionsComponent;
  let fixture: ComponentFixture<PublicationOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
