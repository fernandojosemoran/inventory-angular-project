import { Observable } from "rxjs";
import { SingninRequest, SingninResponse } from "../types/signin";
import { SignupRequest, SignupResponse } from "../types/signup";

export default interface IAuthService {
  signin(signin: SingninRequest): Observable<SingninResponse>;
  singup(signup: SignupRequest): Observable<SignupResponse>;
}
