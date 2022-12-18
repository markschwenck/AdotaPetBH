import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-modal-sign-up',
  templateUrl: './modal-sign-up.component.html',
  styleUrls: ['./modal-sign-up.component.css']
})
export class ModalSignUp implements OnInit {

  formReg: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      nome: new FormControl(),
      cpfcnpj: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      passwordconfirm: new FormControl()
    })
   }

   pushForm: any = FormGroup;

  ngOnInit(): void {  this.pushForm = this.formBuilder.group({
    titulo: [null],
    menssagem: [null]
  });
}

  printConsole() {
    console.log(
      "Menssagem: " + this.pushForm.value.titulo,
      this.pushForm.value.menssagem
    );
  }


  onSubmit() {
    this.userService.modalSignUp(this.formReg.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/modal-login']);
  })
  .catch((error: any) => console.log(error));
  }

}
