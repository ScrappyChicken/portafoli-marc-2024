import ExpenseItem from "./ExpenseItem.jsx";
import { MdDelete } from "react-icons/md";// material design

export default function ExpenseList({ expenses, handleDelete, handleEdit, clearItems }){
  return (
    <>
      
        {expenses.map(expense => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      
      {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          clear expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
}