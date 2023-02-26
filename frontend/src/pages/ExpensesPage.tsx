import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

type Expense = {
  id: string;
  description: string;
  amount: number;
};

export const ExpensesPage: React.FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [value, setValue] = useState(0);

  const fetchExpenses = () => {
    setLoading(true);

    fetch("/api/expenses")
      .then((res) => res.json())
      .then((res) => setExpenses(res))
      .finally(() => setLoading(false));
  };

  const createExpense = (description: string, amount: number) => {
    fetch("/api/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description, amount, date: "2023-02-28" }),
    }).then(() => fetchExpenses());
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleDelete = (id: string) => {
    fetch(`/api/expenses/${id}`, { method: "DELETE" }).then(() =>
      fetchExpenses()
    );
  };

  const handleSubmit = () => {
    createExpense("test", value);
    setValue(0);
  };

  return (
    <div>
      {loading && <div>Loading...</div>}

      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description} ${expense.amount}
            <Button variant="danger" onClick={() => handleDelete(expense.id)}>
              delete
            </Button>
          </li>
        ))}
      </ul>

      <form>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
        />
        <Button onClick={handleSubmit}>Add expense</Button>
      </form>
    </div>
  );
};
