'use strict';

// Пункт 2
let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Ведите дату в формате YYYY-MM-DD");

// Пункт 3
let appData = {
  budget: money,
  TimeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

// Пункт 4
let ExpenseItem1 = "uno"; //prompt("Введите обязательную статью расходов в этом месяце?");
let ValueEI1 = prompt("Во сколько обойдется?");
let ExpenseItem2 = prompt("Введите обязательную статью расходов в этом месяце?");
let ValueEI2 = prompt("Во сколько обойдется?");

appData.expenses.ExpenseItem1 = ValueEI1;
appData.expenses.ExpenseItem2 = ValueEI2;

alert("Бюджет на один день " + appData.budget / 30 + " рублей");

// console.log(money);
// console.log(time);
// console.log(typeof (appData.expenses.ExpenseItem1));
// console.log(typeof (time));
// console.log(appData.expenses);