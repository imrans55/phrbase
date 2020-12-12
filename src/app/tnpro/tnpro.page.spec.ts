import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TnproPage } from './tnpro.page';

describe('TnproPage', () => {
  let component: TnproPage;
  let fixture: ComponentFixture<TnproPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnproPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TnproPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
