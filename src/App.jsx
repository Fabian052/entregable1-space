import { useState } from 'react'
import './App.css'
import dbQuotes from './db/quote.json'
import { getRandom } from './utils/random'
import QuoteBox from './components/QuoteBox'

const bgImgs = ['bg1', 'bg2', 'bg3', 'bg4']

function App() {
  const [quote, setQuote] = useState(getRandom(dbQuotes))
  const [bgImg, setBgImg] = useState(getRandom(bgImgs))

  const handleChange = () => {
    setQuote(getRandom(dbQuotes))
    setBgImg(getRandom(bgImgs))
  }

  return (
    <main className={`app ${bgImg}`}>
      <section className="app__container">
        <h1 className="app__h1">INFOGALAX</h1>

        <QuoteBox author={quote.author} phrase={quote.phrase} />

        <div className="btn__container">
          <button className='quoteBox__btn' onClick={handleChange} >Space random</button>
        </div>
      </section>
    </main>
  )
}

export default App
