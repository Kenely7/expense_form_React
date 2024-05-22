interface Category{
    id: number;
    name: string
}

interface Props{
    categories: Category[]
    chooseCategory :(id:number) => void
}

const ExpenseFilter = ({categories, chooseCategory}: Props) => {
  return (
   <div className="mb-3">
     <select className="form-select" onChange={(event) => chooseCategory(parseInt(event.target.value))}>
        <option value = "" defaultValue="">Filter by category</option>
        {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
    </select>
   </div>
  )
}

export default ExpenseFilter