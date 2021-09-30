//Adding function to calculate function
document.querySelector(`.budget-box`).querySelector(`button`).addEventListener(`click`, calculateFunction);
function calculateFunction() {
    let enteredBudget = document.querySelector(`.budget-box`).querySelector(`input`).value;
    document.querySelector(`.recieved-info`).querySelector(`h2`).textContent = `$${enteredBudget}`;
    let balance = enteredBudget - Number(document.querySelector(`.recieved-info`).querySelectorAll(`h2`)[1].textContent.replace(`$`, ``))
    document.querySelector(`.recieved-info`).querySelectorAll(`h2`)[2].textContent = `$${balance}`;
};



document.querySelector(`.delete-sign`).addEventListener(`click`, deleteSign);
function deleteSign(event) {
    event.target.parentElement.remove();
};



let expenses = 0;
document.querySelector(`.add-expense`).addEventListener(`click`, addExpense);
function addExpense() {
    //for the expense amount now

    let expenseAmountValue = document.querySelector(`.expense-amount`).value;
    expenses += Number(expenseAmountValue);
    document.querySelector(`.recieved-info`).querySelectorAll(`h2`)[1].textContent = `$${expenses}`;

    console.log(expenseAmountValue);

    let balance = document.querySelector(`.recieved-info`).querySelectorAll(`h2`)[2].textContent.replace(`$`, ``);

    let finalBalance = Number(balance) - Number(expenseAmountValue);

    document.querySelector(`.recieved-info`).querySelectorAll(`h2`)[2].textContent = `$${finalBalance}`;

    //for the shitory now
    let newHistoryOverallInfo = document.createElement(`div`);
    newHistoryOverallInfo.classList.add(`overall-history-info`);
    let newHistoryOverallInfoContent = `
    <div class="history-info">
                <h3 class="history-expense-title">${document.querySelector(`.expense-title`).value}</h3>
                <h3 class="history-expense-value">${expenseAmountValue}</h3>
                <h3 class="delete-sign">🗑</h3>
            </div>`;
    newHistoryOverallInfo.innerHTML = newHistoryOverallInfoContent;
    document.querySelector(`.overall-history-info`).appendChild(newHistoryOverallInfo);


    let historyInfoDivNumber = document.querySelectorAll(`.history-info`);
    for (let items of historyInfoDivNumber) {
        items.querySelector(`.delete-sign`).addEventListener(`click`, function (e) {
            e.target.parentElement.remove();
        });
    };
};