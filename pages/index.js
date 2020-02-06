import Head from 'next/head';
import Base from './../layouts/base';
import axios from 'axios';

export default class extends React.Component {
    static async getInitialProps({ query}){
        const page = query.page ? Number(query.page) : 1;
        const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=b407ead4&s=batman&page=${page}`);
        const movies = response.data.Search;

        return { movies, page};
    }

    render() {
        return (
            <Base>
                <Head>
                    <title>App Movies</title>
                </Head>
        { this.props.movies.map((mov => <h1>{mov.Title}</h1>))}
            </Base>
        )
    }
}