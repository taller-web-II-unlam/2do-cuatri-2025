import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCharacter } from './detail-character';

describe('DetailCharacter', () => {
  let component: DetailCharacter;
  let fixture: ComponentFixture<DetailCharacter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCharacter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCharacter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
