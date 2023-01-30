"use client";
import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Header';
import Pui from './Pui';
import Feature from './Feature';

export default function Home() {
  return (
    

<ChakraProvider>

  <Header/>
<Pui />
<Feature />

</ChakraProvider>
    
   
  );
}
