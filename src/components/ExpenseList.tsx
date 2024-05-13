interface Category{}

interface Expenses {
    id: number;
    description: string;
    amount: number;
    category_id: number;
    category:Category;
}
interface Props{
    expenses:Expenses[]
    deleteExpense: (id: number) => void
}

const ExpenseList = ({expenses, deleteExpense}: Props) => {
  return (
    <table className="table table-bordered ">
    <thead>
      <tr>
        <th scope="col">Description</th>
        <th scope="col">Amount</th>
        <th scope="col">Category</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
        {expenses.map((expense) => 
      <tr key={expense.id}>
        <td>{expense.description}</td>
        <td>${expense.amount}</td>
        <td>{expense.category.name}</td>
        <td>
            <button onClick={()=> deleteExpense(expense.id)} className="btn btn-outline-danger">Delete</button>
        </td>
      </tr>
    )}
    <tr>
        <td>
            <strong>Total:</strong>
        </td>
        <td>{expenses.reduce((acc, expense) => acc + parseInt(expense.amount),0).toFixed(2)}
        </td>
    </tr>
      
    </tbody>
  </table>
  )
}

export default ExpenseList