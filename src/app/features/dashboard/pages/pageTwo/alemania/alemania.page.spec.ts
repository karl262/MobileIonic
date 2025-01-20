import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlemaniaPage } from './alemania.page';

describe('AlemaniaPage', () => {
  let component: AlemaniaPage;
  let fixture: ComponentFixture<AlemaniaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlemaniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
