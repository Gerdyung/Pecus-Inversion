function calculate() {
    const rows = document.querySelectorAll("#portfolio tr");
    let total = 0;
    rows.forEach(row => {
        const units = parseFloat(row.cells[1].querySelector("input"). value);
        const price = parseFloat(row.cells[2].querySelector("input"). value);
        const investment = units * price;
        row.cells[3].textContent = investment.toFixed(2);
        total += investment;
    });
    document.getElementById("total").textContent = total.toFixed(2);
}