import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { registerAction} from '../../store/actions';
import { RegisterRequestInterface } from "../../types/registerRequest.interface";
import { selectIsSubmitting } from "../../store/reducer";
import { AuthStateInterface } from "../../types/authState.interface";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'mc-register',
    standalone: true,
    imports:[ReactiveFormsModule, CommonModule],
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    
    form = this.fb.nonNullable.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
    });

    isSubmitting$ = this.store.select(selectIsSubmitting)
    
    constructor(private fb: FormBuilder, private store: Store<{auth: AuthStateInterface}>) {
        
    }

    onSubmit(){
        console.log('form ', this.form.getRawValue())
        const request: RegisterRequestInterface = {
          user: this.form.getRawValue(),
        };
        this.store.dispatch(registerAction({request: request}))
    }
}