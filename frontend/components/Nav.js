import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
    <NavStyles>
         <Link href="/items"> 
        {/* Link from next.js to bind to html5 push state so you dont lose cache data and have to go to the server to get that page */}
            <a>Items</a>
        </Link>
        <Link href="/sell"> 
            <a>Sell</a>
        </Link>
        <Link href="/signup"> 
            <a>Signup</a>
        </Link>
        <Link href="/orders"> 
            <a>Orders</a>
        </Link>
        <Link href="/me"> 
            <a>Account</a>
        </Link>
    </NavStyles>
);

export default Nav;