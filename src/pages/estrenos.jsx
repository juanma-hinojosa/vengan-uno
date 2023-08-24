import EpisodioComponent from '../components/EpisodioComponent';
import episodios from '../json/episodiio.json'
import '../css/estreno.css'
import { useState } from 'react';

function Estrenos() {

    const [currentPage, setCurrentPage] = useState(1);
    const arrayReverse = episodios.slice(1).reverse()
    const recordsPerPage = 8;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = arrayReverse.slice(firstIndex, lastIndex);
    const npage = Math.ceil(arrayReverse.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1)

    // console.log(arrayReverse);
    return (
        <main className='estrenos-wrapper py-4'>
            <div className='container col-xxl-8'>
                <h2 className='orange'>Episodios & Canales</h2>

                <nav className='container' >
                    <ul className='pagination'>
                        <li className='page-item'>
                            <a href="#" className='page-link' onClick={prePage}>
                                Prev
                            </a>
                        </li>
                        {
                            numbers.map((n, i) => (
                                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                    <a href="#" className='page-link ' onClick={() => changeCPage(n)} >
                                        {n}
                                    </a>
                                </li>
                            ))
                        }
                        <li className='page-item'>
                            <a href="#" className='page-link ' onClick={nextPage}>
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className='row row-cols-3'>
                    {records.map(episodio =>
                        <EpisodioComponent
                            key={episodio.key}
                            img={episodio.img}
                            name={episodio.name}
                            resumen={episodio.resumen}
                            fecha={episodio.fecha}
                        />
                    )}
                </div>
                <nav className='container mt-4 nav-hidden' >
                    <ul className='pagination'>
                        <li className='page-item'>
                            <a href="#" className='page-link' onClick={prePage}>
                                Prev
                            </a>
                        </li>
                        {
                            numbers.map((n, i) => (
                                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                    <a href="#" className='page-link ' onClick={() => changeCPage(n)} >
                                        {n}
                                    </a>
                                </li>
                            ))
                        }
                        <li className='page-item'>
                            <a href="#" className='page-link ' onClick={nextPage}>
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </main>
    )

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changeCPage(id) {
        setCurrentPage(id)
    }


    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }
}

export default Estrenos;