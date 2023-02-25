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

  const fetchExpenses = () => {
    setLoading(true);

    fetch("/api/expenses")
      .then((res) => res.json())
      .then((res) => setExpenses(res))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleDelete = (id: string) => {
    fetch(`/api/expenses/${id}`, { method: "DELETE" }).then(() =>
      fetchExpenses()
    );
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
    </div>
  );
};
