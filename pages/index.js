import Head from 'next/head';
import Base from './../layouts/base';

export default class extends React.Component {
    render() {
        return (
            <Base>
                <Head>
                    <title>App Movies</title>
                </Head>
                <h1>hello world</h1>
            </Base>
        )
    }
}