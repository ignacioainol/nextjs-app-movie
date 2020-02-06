import Link from 'next/link'

export default ({ children }) => {
    return (<div className="main">
        <div className="logo">
            <h2><Link href="/">App Movies </Link></h2>
        </div>

        {children}

        { /* global styles*/}
        <style jsx>{`
            .main{
                padding: 0px 50px;
                font-family: sans-serif;
            }
            .logo a{
                color: inherit;
            }
            h2 a{
                text-decoration: none !important;
            } 
        `}</style>
    </div>)

        }
