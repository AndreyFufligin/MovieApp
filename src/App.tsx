import Header from './components/Header/Header.tsx'
import Paginations from './components/Pagination/Paginations.tsx'
import './App.css'
import MovieList from './components/MovieList/MovieList.tsx'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Header />
      </header>
      <main className="app-main">
        <Paginations />
        <MovieList />
      </main>
      <footer></footer>
    </div>
  )
}

export default App
