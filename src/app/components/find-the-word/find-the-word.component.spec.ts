import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTheWordComponent } from './find-the-word.component';

describe('FindTheWordComponent', () => {
  let component: FindTheWordComponent;
  let fixture: ComponentFixture<FindTheWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindTheWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindTheWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
