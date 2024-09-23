import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdListItemComponent } from './bird-list-item.component';

describe('BirdListItemComponent', () => {
  let component: BirdListItemComponent;
  let fixture: ComponentFixture<BirdListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirdListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
