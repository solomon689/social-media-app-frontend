import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationAreaComponent } from './publication-area.component';

describe('PublicationAreaComponent', () => {
  let component: PublicationAreaComponent;
  let fixture: ComponentFixture<PublicationAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
