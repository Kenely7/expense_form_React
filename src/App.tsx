import { useEffect,useState } from 'react'
import ExpenseFilter from './components/ExpenseFilter'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import axios from 'axios'

const App = () => {

    const [expenses, setExpenses] = useState([])
    const [categories, setCategories] = useState([])
    const [error, setError] = useState("")
    

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
    const deleteExpense = (id:number) =>{
        setExpenses(expenses.filter(expense => expense.id !=id))
        axios.delete("http://127.0.0.1:8001/expenses/"+ id)
        .catch((err => setError(err.message)))
    
    }
  return (
    <>
    {error && <p className="text-danger">{error}</p>}
    <ExpenseForm categories = {categories}/>
    <ExpenseFilter categories = {categories}/>
    <ExpenseList expenses={expenses} deleteExpense = {deleteExpense }/>
    </>
  )
}
export default App