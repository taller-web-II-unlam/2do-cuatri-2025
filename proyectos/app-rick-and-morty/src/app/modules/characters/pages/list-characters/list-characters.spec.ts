import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCharacters } from './list-characters';

describe('ListCharacters', () => {
  let component: ListCharacters;
  let fixture: ComponentFixture<ListCharacters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCharacters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCharacters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
