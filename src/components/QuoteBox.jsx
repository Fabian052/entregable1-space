import './styles/QuoteBox.css'

const QuoteBox = ({ phrase, author, img }) => {
  return (
    <section className='quoteBox' >
      <div className={`quoteImg ${img}`}></div>

      <div className="dark"></div>
      <article className='quoteBox__phrase' >
        <p>{phrase}</p>
      </article>

      <footer className='footer'>
        <h3>Author: {author}</h3>
      </footer>
    </section>
  )
}

export default QuoteBox