import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ConnectWallet } from "@thirdweb-dev/react";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    
    <div className={styles.container}>
      <ConnectWallet/>
      <br />
      <h2 style={{ color: 'white', textAlign: 'center', fontSize: '3.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-.025rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
      FiFo Labs
      </h2>
      <br />
      <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-.0rem', width: '100%', fontWeight: '300' }}>
      Presents
      </h2>
            
      <h2 style={{ color: 'white', textAlign: 'center', fontSize: '3.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-.025rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
      Naka Twin
      </h2>

      <br />
      
      <br />
      <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300' }}>
      20,000 more of the same unique crypto investors on the blockchain without commercial rights.
         </h2>   
         <br />
         <br />
 
      
      <div className="image-container" style={{
          backgroundImage: `url('https://ipfs.io/ipfs/QmUHz43wSKm9UorWdjTTWU6EUZFRsj5b9SwCCqo9JpBsRa')`,
          backgroundSize: 'contain', // Try using 'contain'
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          width: '100%',
          height: 'vh', // Adjust the height as needed
      }}></div>
<br />

     
        <div>

      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/mint")}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/drop.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Mint Naka Twin</h2>
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-.025rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
          &quot;Copymint&quot;
          </h2>
                    
        </div>
      
      
                
</div>
<br />


          
<a
  href="https://twitter.com/FiFoLabs"
  target="_blank"
  className={styles.h1}
  style={{
    display: 'block', // Ensure it's a block element
    textDecoration: 'none',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: '1.5rem',
    fontFamily: 'NakaPixel, sans-serif',
    margin: '0 auto', // Center horizontally
    letterSpacing: '-0.15rem',
    width: '100%',
    fontWeight: '300',
    textShadow: '0rem 0rem 0.75rem #66ff00',
  }}
>
  FiFo Labs Twitter
</a>


        <h2 style={{ color: '#66ff00', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.1rem', width: '100%', fontWeight: '300'}}>
        FiFoLabs69@gmail.com
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
  <a
    href="https://t.co/011Ifc7y9G"
    target="_blank"
    className={styles.h1}
    style={{
      textDecoration: 'none',
      color: '#ffffff',
      textAlign: 'center',
      fontSize: '1.5rem',
      fontFamily: 'NakaPixel, sans-serif',
      margin: '0 auto', // Center horizontally
      letterSpacing: '-0.15rem',
      width: '100%',
      fontWeight: '300',
      textShadow: '0rem 0rem 0.75rem #66ff00',
    }}
  >
    Discord Invite
  </a>
</div>
        <br />

          <br />
          


<br />
<br />
<div className="image-container" style={{
backgroundImage: `url('https://ipfs.io/ipfs/QmdpAUDqDT6xLFJgQVG1imFhLoiSMthmvKGmXb2BvAPhv7')`,
backgroundSize: 'contain', // Try using 'contain'
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center center',
width: '100%',
height: 'vh', // Adjust the height as needed
}}></div>

<br />
<br />



<br />
<h2 style={{ color: 'white', textAlign: 'center', fontSize: '4rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-.025rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
WE ARE Fifo LABs
      </h2>

<br />

      
          <br />

         
    <div className="image-container" style={{
    backgroundImage: `url('https://ipfs.io/ipfs/QmZWKvA9PBxrzAEFKg6LhJxjhTSA8K64hK1DLmBiZSjfCK')`,
    backgroundSize: 'contain', // Try using 'contain'
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: 'vh', // Adjust the height as needed
}}></div>
<br />
   <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
   Created by&nbsp;
         </h2>
         <a
  href="https://twitter.com/FiFoLabs"
  target="_blank"
  className={styles.h1}
  style={{
    display: 'block', // Ensure it's a block element
    textDecoration: 'none',
    color: '#020052',
    textAlign: 'center',
    fontSize: '2rem',
    fontFamily: 'NakaPixel, sans-serif',
    margin: '0 auto', // Center horizontally
    letterSpacing: '-0.15rem',
    width: '100%',
    fontWeight: '300',
    textShadow: '0rem 0rem 0.75rem #66ff00',
  }}
>
  FiFo Labs&nbsp;
</a>

        <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        All rights reserved.
         </h2>
         <br />
         <br />
    </div>
    </div>
  );
};

export default Home;
