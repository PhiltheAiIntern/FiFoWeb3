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


         

         <br />

          

        <a href="https://twitter.com/FiFoLabs" target="_blank" className={styles.h1} style={{ textDecoration: 'none', color: '#ffffff', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00'}}>
        FiFo Labs Twitter
        </a>

        <h2 style={{ color: '#66ff00', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.1rem', width: '100%', fontWeight: '300'}}>
        FiFoLabs69@gmail.com
          </h2>

          
        <a href="https://t.co/011Ifc7y9G" target="_blank" className={styles.h1} style={{ textDecoration: 'none', color: '#ffffff', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00'}}>
        Discord Invite
        </a>
        <br />
        <div id="container05" className="style1 container default">
            <div className="wrapper">
              <div className="inner" data-onvisible-trigger="1">
                <button className="large-button">
                <a href="https://youtu.be/iiE7-mihBCU?feature=shared" target="_blank" className={styles.h1} style={{ textDecoration: 'none', color: '#020052', textAlign: 'center', fontSize: '2rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
                Ai Phils 
                  
                  </a>
                </button>
              </div>
            </div>
          </div>
          <br />
          <a href="https://looksrare.org/collections/0x75a332E626a0B421C3c5C405474b9727aDB5dDff?queryID=19603e03ef4ae0e029229b900ce0b1be" target="_blank" className={styles.h1} style={{ textDecoration: 'none', color: '#ffffff', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00'}}>
          Naka Twin • Looks Rare
          </a>
          <a href="https://x2y2.io/collection/nakaphlip/items" target="_blank" className={styles.h1} style={{ textDecoration: 'none', color: '#ffffff', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00'}}>
          Naka Twin • X2Y2
          </a>
          <a href="https://opensea.io/collection/fifo-phil" target="_blank" className={styles.h1} style={{ textDecoration: 'none', color: '#ffffff', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00'}}>
          FiFo Phil • Opensea
          </a>
          <a href="https://blur.io/collection/fifo-phil" target="_blank" className={styles.h1} style={{ textDecoration: 'none', color: '#ffffff', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00'}}>
          FiFo Phil • Blur
          </a>
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
         <a href="https://twitter.com/FiFoLabs" target="_blank" className={styles.h1} style={{ textDecoration: 'none', color: '#020052', textAlign: 'center', fontSize: '2rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
         FiFo Labs&nbsp; 
         </a>
        <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        All rights reserved.
         </h2>
         <br />
         <br />
    </div>
    
  );
};

export default Home;
