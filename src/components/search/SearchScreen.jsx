import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName'
import HeroCard from '../hero/HeroCard'
import queryString from 'query-string'

const SearchScreen = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const {q = ''} = queryString.parse(location.search)

    const [values, handleInputChange, reset] = useForm({
      searchText: q
    })

    const {searchText} = values

    const heroesFilter = useMemo( () => getHeroesByName(q), [q]) 

    const handleSubmit = (e) => {
      e.preventDefault()
      navigate(`?q=${searchText}`)
    }

    return (
      <>
        <h1>Busquedas</h1>
        <hr />

        <div className='row'>
          <div className='col-5'>
            <h4>Buscar</h4>
            <hr />

            <form onSubmit={handleSubmit}>
              <input 
                type="text"
                placeholder="Buscar un heroe"
                className='form-control'
                name='searchText'
                autoComplete='off'
                value={searchText}
                onChange={handleInputChange}
              />

              <button 
                type='submit' 
                className='btn btn-outline-primary col-12'
              >
                Buscar
              </button>

            </form>
          </div>

          <div className='col-7'>
            <h4>Resultados</h4>
            <hr />

            {
              (q === '') ? <div className='alert alert-info'>Busca un heroe</div>
                         : (heroesFilter.length === 0) && <div className='alert alert-danger'>No hay resultados</div>
            }

            {
              heroesFilter.map(hero => (
                <HeroCard 
                  key={hero.id}
                  {...hero}
                />
              ))
            }
          </div>
        </div>
      </>
    )
}

export default SearchScreen