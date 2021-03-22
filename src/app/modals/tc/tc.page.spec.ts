import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TcPage } from './tc.page';

describe('TcPage', () => {
  let component: TcPage;
  let fixture: ComponentFixture<TcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
