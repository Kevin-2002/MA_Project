import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogSelectorPage } from './dog-selector.page';

describe('DogSelectorPage', () => {
  let component: DogSelectorPage;
  let fixture: ComponentFixture<DogSelectorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DogSelectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
