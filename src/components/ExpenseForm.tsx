interface Category {
    id: number;
    name: string
}


interface Props{
    categories: Category[]
}

const ExpenseForm = ({categories}: Props) => {
  return (
    <form >
        <div className="mb-3">
            <label htmlFor="" className="form-label">Description:</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Amount:</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Category:</label>
            <select className="form-select" aria-label="Default select example">
                <option value="" defaultValue="">Pick a Category</option>
                {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option> )}
                
            </select>
        </div>
        <div className="mb-3">
             <button className="btn btn-primary">Add Expense</button>
        </div>
    </form>
  );
};

export default ExpenseForm;