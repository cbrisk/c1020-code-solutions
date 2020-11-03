/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0) {
    this.accounts.push(new Account(this.nextAccountNumber, holder));
    this.accounts[this.accounts.length - 1].deposit(balance);
    this.nextAccountNumber++;
    return this.nextAccountNumber - 1;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (number === this.accounts[i].number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var bal = 0;
  if (this.accounts.length === 0) {
    return bal;
  }
  for (var i = 0; i < this.accounts.length; i++) {
    bal += this.accounts[i].getBalance();
  }
  return bal;
};
