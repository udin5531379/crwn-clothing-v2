import '../categories-item/categories-item.style.scss'
import CategoryItem from '../category-item/category-item.component'

const CategoriesItem = ({categories}) => {
    return (
    <div className="categories-container">
        {categories.map((item) => (
            <CategoryItem key={item.id} category={item}/>
        ))}
    </div>
    )
}

export default CategoriesItem