import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";


@Component({
    selector: 'mc-register',
    standalone: true,
    imports:[ReactiveFormsModule],
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    
    form = this.fb.nonNullable.group({
        userName: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
    
    constructor(private fb: FormBuilder) {
        
    }

    onSubmit(){
        console.log('form ', this.form.getRawValue())
    }
}