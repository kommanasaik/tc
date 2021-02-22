import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UseradditemslistPage } from './useradditemslist.page';

describe('UseradditemslistPage', () => {
  let component: UseradditemslistPage;
  let fixture: ComponentFixture<UseradditemslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseradditemslistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UseradditemslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
