export class LoginReqModel {
  emailAddress: string;
  password: string;

  constructor(
    emailAddress: string,
    password: string
  ) {
    this.emailAddress = emailAddress;
    this.password = password;
  }
}
