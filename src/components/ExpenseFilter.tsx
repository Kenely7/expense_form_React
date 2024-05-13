interface Category{
    id: number;
    name: string
}

interface Props{
    categories: Category[]
}


const ExpenseFilter = ({categories}: Props) => {
  return (
   <div className="mb-3">
     <select className="form-select" aria-label="Default select example">
        <option value = "" defaultValue="">Filter by category</option>
        {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
    </select>
   </div>
  )
}

export default ExpenseFilter