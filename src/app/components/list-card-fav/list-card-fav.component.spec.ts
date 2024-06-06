import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardFavComponent } from './list-card-fav.component';

describe('ListCardFavComponent', () => {
  let component: ListCardFavComponent;
  let fixture: ComponentFixture<ListCardFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCardFavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCardFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
