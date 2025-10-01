import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEpisodes } from './list-episodes';

describe('ListEpisodes', () => {
  let component: ListEpisodes;
  let fixture: ComponentFixture<ListEpisodes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEpisodes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEpisodes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
