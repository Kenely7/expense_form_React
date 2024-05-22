import { useEffect,useState } from 'react'
import ExpenseFilter from './components/ExpenseFilter'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import axios from 'axios'

interface Category{
    id :number;
    name: string ;
}

interface Expenses {
    id: number;
    description: string;
    amount: number;
    category_id: number;
    category:Category;
}
const App = () => {

    const [expenses, setExpenses] = useState<Expenses[]>([])
    const [categories, setCategories] = useState([])
    const [error, setError] = useState("")
    const [selectedCategory, setSelectedCategory]= useState<number>()
    

    useEffect(() => {
        axios.get("http://127.0.0.1:8001/categories/")
        .then((res) => {
            console.log(res.data);
            setCategories(res.data)
            setError("")

        })
        .catch(err => {
            console.log(err.message);
            setError(err.message);
        });
    },[]);
    useEffect(()=> {
        axios.get("http://127.0.0.1:8001/expenses")
        .then((res)=> {
            console.log(res.data);
            setExpenses(res.data);
        
        })
        .catch((err) => setError(err.message))
    },[]);

    const addExpense = (data: Expenses) => {
        setExpenses([data, ...expenses])
        axios.post("http://127.0.0.1:8001/expenses/", data)
        .then(res => setExpenses([res.data, ...expenses]))
        .catch((err) => setError(err.message))
    };   
    const deleteExpense = (id:number) =>{
        setExpenses(expenses.filter(expense => expense.id != id))
        axios.delete("http://127.0.0.1:8001/expenses/"+ id)
        .catch((err => setError(err.message)))
    };

    const chooseCategory = (id:number)=> {
        setSelectedCategory(id)
    }
    
      const filteredExpenses = selectedCategory? 
         expenses.filter((expense) => 
             expense.category.id == selectedCategory)
           : expenses;
    
    
    
  return (
    <>
    <p>{selectedCategory}</p>
    {error && <p className="text-danger">{error}</p>}
    <ExpenseForm categories = {categories} addExpense ={addExpense}/>
    <ExpenseFilter categories = {categories} chooseCategory ={chooseCategory}/>
    <ExpenseList expenses={filteredExpenses} deleteExpense = { deleteExpense }/>
    </>
  )
}
export default App