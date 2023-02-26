import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

type Expense = {
  id: string;
  description: string;
  amount: number;
};

type FormValues = {
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

  const createExpense = ({
    description,
    amount,
  }: {
    description: string;
    amount: number;
  }) => {
    return fetch("/api/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description, amount, date: "2023-02-28" }),
    }).then((response) => {
      if (!response.ok) {
        return response.json().then((errors) => Promise.reject(errors));
      }

      return fetchExpenses();
    });
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleDelete = (id: string) => {
    fetch(`/api/expenses/${id}`, { method: "DELETE" }).then(() =>
      fetchExpenses()
    );
  };

  // TODO: Move form the a separate component
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    createExpense(data)
      .catch((errors) => {
        for (const error of errors) {
          setError(error.loc[0], {
            type: "server",
            message: error.msg,
          });
        }

        return Promise.reject();
      })
      .then(() => reset());
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

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            {...register("description")}
            placeholder="Beer"
          />
          {errors.description && (
            <Form.Text style={{ color: "red" }}>
              {errors.description.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            {...register("amount")}
            placeholder="9.99"
          />
          {errors.amount && (
            <Form.Text style={{ color: "red" }}>
              {errors.amount.message}
            </Form.Text>
          )}
        </Form.Group>

        <Button type="submit">Add expense</Button>
      </Form>
    </div>
  );
};
