document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    let income = document.getElementById("income").value;
    let food = document.getElementById("food").value;
    let rent = document.getElementById("rent").value;
    let clothes = document.getElementById("clothes").value;

    if (
      isNaN(income) ||
      isNaN(food) ||
      isNaN(rent) ||
      isNaN(clothes) ||
      income === "" ||
      food === "" ||
      rent === "" ||
      clothes === "" ||
      income === " " ||
      food === " " ||
      rent === " " ||
      clothes === " "
    ) {
      document.getElementById("totalExpense").innerText = "00";
      document.getElementById("totalBalance").innerText = "00";
      document.getElementById("savePercent").value = "";
      document.getElementById("amount").innerText = "00";
      document.getElementById("remain").innerText = "00";
      return alert("please input a valid number");
    }
    income = parseInt(income);
    food = parseInt(food);
    rent = parseInt(rent);
    clothes = parseInt(clothes);
    document.getElementById("totalExpense").innerText = food + rent + clothes;
    if (income < document.getElementById("totalExpense").innerText) {
      document.getElementById("totalExpense").innerText = "00";
      document.getElementById("totalBalance").innerText = "00";
      document.getElementById("savePercent").value = "";
      document.getElementById("amount").innerText = "00";
      document.getElementById("remain").innerText = "00";
      return alert("this calculation is not possible");
    }
    document.getElementById("totalBalance").innerText =
      income - (food + rent + clothes);
    document.getElementById("savePercent").value = "";
    document.getElementById("amount").innerText = "00";
    document.getElementById("remain").innerText = "00";
  });

document.getElementById("save").addEventListener("click", function () {
  const save = parseInt(document.getElementById("savePercent").value);
  if (isNaN(save)) {
    document.getElementById("amount").innerText = "00";
    document.getElementById("remain").innerText = "00";
    return alert("please input a valid number");
  }
  const percent =
    parseFloat(document.getElementById("income").value) * (save / 100);

  if (percent > document.getElementById("totalBalance").innerText) {
    document.getElementById("amount").innerText = "00";
    document.getElementById("remain").innerText = "00";
    return alert("this calculation is not possible");
  }
  document.getElementById("amount").innerText = percent.toFixed(2);
  document.getElementById("remain").innerText =
    parseFloat(document.getElementById("totalBalance").innerText) -
    parseFloat(document.getElementById("amount").innerText).toFixed(2);
});
