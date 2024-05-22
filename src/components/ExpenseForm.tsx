import { useForm } from "react-hook-form";

interface Category {
    id: number;
    name: string;
}
interface Expenses {
    id: number;
    description: string;
    amount: number;
    category_id: number;
    category:Category;
}

interface Props{
    categories: Category[];
    addExpense:(data:Expenses) => void
}

const ExpenseForm = ({categories, addExpense}: Props) => {
    const {register,handleSubmit,formState:{errors},reset} = useForm()
    let onSubmit= (data)=> {

        console.log(data);
        addExpense(data);
        reset()

    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
        <div className="mb-3">
            <label htmlFor="" className="form-label">Description:</label>
            <input {... register("description",{required:true, minLength:5})} type="text" className="form-control"/>
            {errors.description?.type =="required" && <p className="text-danger">This Field is required</p>}
            {errors.description?.type =="minLength" && <p className="text-danger">This Field is requires at least 5 characters</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Amount:</label>
            <input {... register("amount",{required:true})} type="text" className="form-control"/>
            {errors.amount?.type =="required"&& <p className="text-danger">This Field is required</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Category:</label>
            <select {...register("category_id", {required:true})} className="form-select" aria-label="Default select example">
                <option value="" defaultValue="">Pick a Category</option>
                {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option> )}
                
            </select>
            {errors.category_id?.type =="required" && <p className="text-danger">This Field is required</p>}
        </div>
        <div className="mb-3">
             <button className="btn btn-primary">Add Expense</button>
        </div>
    </form>
  );
};

export default ExpenseForm;