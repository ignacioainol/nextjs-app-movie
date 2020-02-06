import Head from 'next/head';
import Base from './../layouts/base';
import axios from 'axios';
import Link from 'next/link';

export default class extends React.Component {
    static async getInitialProps({ query }) {
        const page = query.page ? Number(query.page) : 1;
        const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=b407ead4&s=batman&page=${page}`);
        const movies = response.data.Search;

        return { movies, page };
    }

    render() {
        return (
            <Base>
                <Head>
                    <title>App Movies</title>
                </Head>
                <div>
                    <div class="peliculas">
                        {this.props.movies.map((mov => <h1>{mov.Title}</h1>))}
                    </div>
                </div>
                {this.renderPagination()}
            </Base>
        )
    }

    renderPagination() {
        const previous = this.props.page > 1 ?
            <Link href={`/?page=${this.props.page - 1}`}><a>Previous</a></Link> : null;


        return (
            <div className="control">
                {previous}
                <Link href={`/?page=${this.props.page + 1}`}><a>Next</a></Link>
                <style jsx>{`
                    .control{
                        text-align:center
                    }
                    .control a{
                        padding: 0 10px;
                    }
                `}</style>
            </div>
        )
    }

}