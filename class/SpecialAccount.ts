import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (deposit: number): void => {
    this.balance += deposit + 10;
    console.log(
      `Deposito de ${deposit} realizado com sucesso! Seu saldo atual é ${this.balance}. Bônus de 10 adicionado. `
    );
  };

  readonly setName = (name: string): void => {
    console.log("Nome não pode ser alterado");
  };

  readonly setAccountNumber = (): void => {
    console.log("AccountNumber não pode ser alterado");
  };
}
