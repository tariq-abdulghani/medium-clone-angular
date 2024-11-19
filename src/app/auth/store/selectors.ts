import { createSelector } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";

// feature slice
export const selectFeature = (state:{auth: AuthStateInterface})=> state.auth
// its not used but i will leave this code here as example
export const selectIsSubmitting = createSelector(selectFeature, (s)=>s.isSubmitting)

