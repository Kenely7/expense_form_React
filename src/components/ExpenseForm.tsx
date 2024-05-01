

const ExpenseForm = () => {
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
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div className="mb-3">
             <button className="btn btn-primary">Add Expense</button>
        </div>
    </form>
  );
};

export default ExpenseForm;