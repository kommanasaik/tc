import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RatingpagemodelPage } from './ratingpagemodel.page';

describe('RatingpagemodelPage', () => {
  let component: RatingpagemodelPage;
  let fixture: ComponentFixture<RatingpagemodelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingpagemodelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RatingpagemodelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
