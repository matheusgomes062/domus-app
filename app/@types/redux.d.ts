import { AuthState } from './caminho-para-o-authReducer';

declare global {
  interface RootState {
    auth: AuthState;
  }
}