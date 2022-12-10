import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLoginComponent } from './modal-login.component';

describe('ModalLoginComponent', () => {
  let component: ModalLoginComponent;
  let fixture: ComponentFixture<ModalLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function LoginToggle(){
  var container = document.querySelector('container')
  container?.classList.toggle('active');
  var popup = document.querySelector(".login-form")
  popup?.classList.toggle('active')
}