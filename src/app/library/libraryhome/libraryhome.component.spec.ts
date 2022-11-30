import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryhomeComponent } from './libraryhome.component';

describe('LibraryhomeComponent', () => {
  let component: LibraryhomeComponent;
  let fixture: ComponentFixture<LibraryhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
