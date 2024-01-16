import './categories.styles.scss';

const App = () => {

  const categories = [

    {
      id: 1,
      category:'Hats',
    },

    {
      id: 2,
      category:'Jackets',
    },

    {
      id: 3,
      category:'Sneakers',
    },

    {
      id: 4,
      category:'Men',
    },

    {
      id: 5,
      category:'Women',
    },

    

  ]

  return (
  <div className="categories-container">
    {categories.map((item) => (
        <div className="category-container" key={item.id}>
          <div className="category-container-body">
            <h1>{item.category}</h1>
            <p>Shop Now</p>
          </div>
        </div>
    ))}
  </div>
  );
};

export default App;
