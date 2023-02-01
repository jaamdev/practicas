import {useState, useEffect} from 'react'
import {obtenerTodo, obtenerPersonaje} from './funciones'

function App() {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character/?page=1")
  const [siguiente, setSiguiente] = useState(null)
  const [anterior, setAnterior] = useState(null)
  const [paginas, setPaginas] = useState(null)
  const [total, setTotal] = useState(null)
  const [personajes, setPersonajes] = useState(null)
  const [personaje, setPersonaje] = useState(null)

  const irSiguiente = (url) => {
    setUrl(url)
  }

  const irAnterior = (url) => {
    setUrl(url)
  }

  useEffect(()=>{
    obtenerTodo(url, setSiguiente, setAnterior, setTotal, setPaginas, setPersonajes)
  }, [url])

  return (
    <div className='contenedor'>
      <div className='header'>
        <h1><a href="https://youtu.be/4CNr0SQRTgo" target="_blank" rel="noopener noreferrer">Ver vídeo</a></h1>
        <h2>Bienvenidos a la app de rick and morty api</h2>
        <p>Total de personajes : {total}</p>
        <p>Cantidad de páginas : {paginas}</p>
        {anterior != null ? (
          <button onClick={()=>irAnterior(anterior)}>anterior</button>
        ) : ('')}
        {siguiente != null ? (
          <button onClick={()=>irSiguiente(siguiente)}>siguiente</button>
        ) : ('')}
        <div>
          {personajes != null ? (
            personajes.map(personaje => (
              <p className='nombre-pj' key={personaje.id} onClick={()=>{obtenerPersonaje(personaje.id, setPersonaje)}}>{personaje.name}</p>
            ))
          ) : ('')}
        </div>
      </div>
      <div className='personaje'>
          {personaje != null ? (
            <div>
              <h2>{personaje.name}</h2>
              <img src={personaje.image} alt={personaje.name} />
            </div>
          ) : ('')}
        </div>
    </div>
  );
}

export default App;
