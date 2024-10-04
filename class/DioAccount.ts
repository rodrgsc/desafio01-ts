export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (deposit: number): void => {
    if (this.validateStatus()) {
      this.balance += deposit;
      console.log(
        `Depósito de ${deposit} realizado com sucesso! Saldo atual: ${this.balance}`
      );
    }
  };

  withdraw = (withdraw: number): void => {
    if (this.validateStatus() && this.balance > withdraw) {
      this.balance -= withdraw;
      console.log(
        `Saque de ${withdraw} realizado com sucesso! Saldo atual: ${this.balance}`
      );
    } else {
      console.log(`Saque não permitido`);
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
