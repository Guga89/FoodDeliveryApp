import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import LayOut from '../components/layout';

export default function Home() {
  return (
    <>
      <Header pageTitle="Welcome to Guga's" />
      <p>
        Here will be some carousel, bonus cards, new products, discounts etc
        information
      </p>
    </>
  );
}
