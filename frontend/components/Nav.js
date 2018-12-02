import Link from 'next/link';

const Nav = () => (
    <div>
         <Link href="/sell"> 
        {/* Link from next.js to bind to html5 push state so you dont lose cache data and have to go to the server to get that page */}
            <a>Sell!</a>
        </Link>
        <Link href="/"> 
        {/* Link from next.js to bind to html5 push state so you dont lose cache data and have to go to the server to get that page */}
            <a>Home!</a>
        </Link>
    </div>
);

export default Nav;