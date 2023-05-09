import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeddingMealPage } from './wedding-meal.page';

describe('WeddingMealPage', () => {
  let component: WeddingMealPage;
  let fixture: ComponentFixture<WeddingMealPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeddingMealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
