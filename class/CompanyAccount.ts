import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (getLoan: number): void => {
    if (this.validateStatus()) {
      this.balance += getLoan;
      console.log("Voce pegou um empréstimo");
    }
  };
}
