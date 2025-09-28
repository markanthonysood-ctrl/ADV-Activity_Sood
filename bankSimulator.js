const readline = require("readline");

let balance = 1000000;

function checkBalance(amount) {
  return new Promise((resolve, reject) => {
    if (balance >= amount) {
      resolve("Balance is enough.");
    } else {
      reject("Insufficient funds.");
    }
  });
}

function deductAmount(amount) {
  return new Promise((resolve, reject) => {
    if (amount > 0) {
      balance -= amount;
      resolve(`Deducted ${amount}. New balance: ${balance}`);
    } else {
      reject("Invalid amount.");
    }
  });
}

function confirmTransaction() {
  return new Promise((resolve) => {
    resolve("Transaction complete!");
  });
}

function transfer(amount, rl) {
  checkBalance(amount)
    .then((msg) => {
      console.log(msg);
      return deductAmount(amount);
    })
    .then((msg) => {
      console.log(msg);
      return confirmTransaction();
    })
    .then((msg) => {
      console.log(msg);
      rl.close();
    })
    .catch((err) => {
      console.log("Error:", err);
      rl.close(); 
    });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter amount to transfer: ", (input) => {
  const amount = Number(input.trim());
  transfer(amount, rl);
});
