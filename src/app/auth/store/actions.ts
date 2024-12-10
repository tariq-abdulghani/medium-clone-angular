import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register Success': props<{ user: CurrentUserInterface }>(),
    'Register Failure': emptyProps()
  },
});

// export const registerAction = createAction(
//   '[Auth] Register',
//   props<{ request: RegisterRequestInterface }>()
// );

// export const registerActionSuccess = createAction(
//   '[Auth] Register Success',
//   props<{ request: AuthResponseInterface }>()
// );

// export const registerActionFailure = createAction(
//   '[Auth] Register Failure',
//   props<{ request: {} }>()
// );
