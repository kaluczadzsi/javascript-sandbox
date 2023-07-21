class Wallet {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }

  deposit(amount) {
    this._processDeposit(amount);
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log('Not enough founds');
      return;
    }
    this._processWithdraw(amount);
    this._balance -= amount;
  }

  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }

  _processDeposit(amount) {
    console.log(`Depositing: ${amount}`);
    this._transactions.push({ type: 'deposit', amount });
  }

  _processWithdraw(amount) {
    console.log(`Withdrawing: ${amount}`);
    this._transactions.push({ type: 'withdraw', amount });
  }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.deposit(600);
wallet.withdraw(-200);

console.log(wallet);
console.log(wallet.balance);
wallet.withdraw(99999999999999);

console.log(wallet.transactions);
