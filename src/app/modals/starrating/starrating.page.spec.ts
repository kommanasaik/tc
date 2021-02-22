import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StarratingPage } from './starrating.page';

describe('StarratingPage', () => {
  let component: StarratingPage;
  let fixture: ComponentFixture<StarratingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarratingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StarratingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
