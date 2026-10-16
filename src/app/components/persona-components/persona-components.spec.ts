import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonaComponents } from './persona-components';

describe('PersonaComponents', () => {
  let component: PersonaComponents;
  let fixture: ComponentFixture<PersonaComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
