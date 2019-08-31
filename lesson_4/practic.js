'use strict';

let money, time;
function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
      money = +prompt ("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt ("Во сколько обойдется?", "");
            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                console.log ("done");
                appData.expenses[a] = b;
            } else {                            
                console.log ("bad result");
                i--;
            }
        };
    },
    detectDayBudget: function() {
        appData.moneyPerDay = appData.budget / 30;
        alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Произошла ошибка");
        }
    },
    checkServings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой годовой процент");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(let i = 1; i < 3; i++) {
            let opt = prompt ("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    
    
    chooseIncome: function() {
        let items = prompt("Что принесёт дополнительный доход (Перечислите через запятую)", "");
        
        while(isFinite(items) == true || items == "" || items == null){           
            items = prompt("Что принесёт дополнительный доход (Перечислите через запятую)", "");
        }
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то ещё?"));
        appData.income.sort();
    }
};

appData.chooseIncome();