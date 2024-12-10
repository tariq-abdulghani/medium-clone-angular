import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { authActions } from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';

const effectSourceConfig = (
  actions$ = inject(Actions),
  authService = inject(AuthService)
) =>
  actions$.pipe(
    // listen to
    ofType(authActions.register),
    // on success
    switchMap(({ request }) => {
      return authService.register(request).pipe(
        map((currentUser: CurrentUserInterface) => {
          return authActions.registerSuccess({ user: currentUser });
        })
      );
    }),
    // on error
    catchError(() => {
      return of(authActions.registerFailure());
    })
  );

export const registerEffect = createEffect(effectSourceConfig, {
  functional: true,
});
