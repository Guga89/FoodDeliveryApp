import Head from 'next/head';
import Link from 'next/link';
import LayOut from '../components/layout';

export default function Home() {
  return (
    <LayOut>
      <header>
        <div className="logo">Logo</div>
        <div className="search">
          <input type="text" placeholder="Search for food, coffee, etc..." />
        </div>
        <div className="categories">
          <ul role="list">
            <li>Hot Dishes</li>
            <li>Cold Dishes</li>
            <li>Soup</li>
            <li>Grill</li>
            <li>Appetizer</li>
            <li>Dessert</li>
          </ul>
        </div>
      </header>
    </LayOut>
  );
}
