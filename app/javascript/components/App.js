import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Movies from './Movies/Movies'
import Movie from './Movie/Movie'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Movies />}/>
                <Route path="/movies/:slug" element={<Movie />}/>
            </Routes>
        </Router>
    )
}

export default App
