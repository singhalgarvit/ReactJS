import './App.css';
import blogs from './blogs.json';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Blog Website</h1>
      <div className="blogs">
        {blogs.map((value, index) => (
          <Link to={`/${value.blog_id}`} style={{ textDecoration: 'none' }} >  
            <div className='blog'>
              <h3>{value.title}</h3>
              <p className='description'>{value.Description}</p>
              <p className='author'>- {value.author}</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}

export default App;
