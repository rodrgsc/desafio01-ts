import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { SpecialAccount } from "./class/SpecialAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
console.log(peopleAccount);
peopleAccount.deposit(103);
peopleAccount.deposit(7);
peopleAccount.withdraw(50);
peopleAccount.withdraw(121);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
console.log(companyAccount);
companyAccount.deposit(122);
companyAccount.withdraw(80);
const specialAccount: SpecialAccount = new SpecialAccount(
  "Cliente Especial",
  154
);
console.log(specialAccount);
specialAccount.deposit(50);
specialAccount.withdraw(40);
specialAccount.deposit(10);
