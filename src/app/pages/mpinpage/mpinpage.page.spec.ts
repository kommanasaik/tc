import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MpinpagePage } from './mpinpage.page';

describe('MpinpagePage', () => {
  let component: MpinpagePage;
  let fixture: ComponentFixture<MpinpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpinpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MpinpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
