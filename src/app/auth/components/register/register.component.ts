import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { registerAction} from '../../store/actions';

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
    
    constructor(private fb: FormBuilder, private store: Store) {
        
    }

    onSubmit(){
        console.log('form ', this.form.getRawValue())
        this.store.dispatch(registerAction())
    }
}