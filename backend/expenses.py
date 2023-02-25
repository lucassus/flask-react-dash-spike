import datetime
import json
import uuid
from typing import Optional
from uuid import UUID

from pydantic import BaseModel


class Expense(BaseModel):
    id: Optional[UUID]
    date: datetime.date
    amount: float
    description: str


_expenses: list[Expense] = [
    Expense(id=uuid.uuid4(), description="Expense 1", amount=100, date="2023-01-01"),
    Expense(id=uuid.uuid4(), description="Expense 2", amount=9.99, date="2023-01-02"),
]


def list_expenses() -> list[Expense]:
    return _expenses


def create_expense(expense: Expense) -> Expense:
    expense.id = uuid.uuid4()
    _expenses.append(expense)
    return expense


def delete_expense(uuid: UUID) -> None:
    for expense in _expenses:
        if expense.id == uuid:
            _expenses.remove(expense)
            break


if __name__ == "__main__":
    create_expense(
        Expense.parse_raw(
            json.dumps(
                {
                    "date": "2021-01-01",
                    "amount": 100.00,
                    "description": "A description",
                }
            )
        )
    )

    delete_expense(_expenses[0].id)
    delete_expense(_expenses[1].id)

    expenses = list_expenses()
    print(expenses)
