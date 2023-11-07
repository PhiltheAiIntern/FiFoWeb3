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
      <h2 style={{ color: 'white', textAlign: 'center', fontSize: '5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-.025rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
      FiFo Labs
      </h2>
      <br />
      <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-.0rem', width: '100%', fontWeight: '300' }}>
      Presents
      </h2>
            
      <h2 style={{ color: 'white', textAlign: 'center', fontSize: '4.75rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-.025rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
      Naka Phlip
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
          height: '50vh', // Adjust the height as needed
      }}></div>

      <div id="container05" className="style1 container default">
        <div className="wrapper">
          <div className="inner" data-onvisible-trigger="1">
            <button className="large-button">
                <a href="https://mirror.xyz/0x1Fc5fdF0C51763A48e48Bcaa737C5FfE38A648F3/a81NcMuGq7QY01TaLw11Ivs7ruikIEPZHcKTmU34HIQ" target="_blank" className={styles.h1} style={{ textDecoration: 'none', color: '#020052', textAlign: 'center', fontSize: '2rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
                  Whitepaper 
                </a>
            </button>
          </div>
        </div>
      </div>

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
          <h2 className={styles.selectBoxTitle}>Mint Naka Phlip</h2>
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-.025rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
          &quot;Copymint&quot;
          </h2>
                    
        </div>
      
      
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/stake")}
        >
          <Image src="/icons/token.webp" alt="token" width={64} height={64} />

          <h2 className={styles.selectBoxTitle}> Stake FiFo Phil</h2>
          
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-.025rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
          A.i. Personal Intern
          </h2>
          </div>
        </div>

        
</div>
<br />
<h2 style={{ color: 'white', textAlign: 'center', fontSize: '2rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.1rem', width: '100%', fontWeight: '300' }}>
FiFo Phil works so You dont have too! S2E $FGem
          </h2>

          <br />
          <a href="https://etherscan.io/address/0x374b2Dfa49D01Fe1EeDB9e58Db7Ee113D290840A" target="_blank" className={styles.h1} style={{ textDecoration: 'none', color: '#66ff00', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300'}}>
          FiFo Mine Etherscan
        </a>

          <br />
          <br />

          <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xe5cf489df5fd1c1e3710bef745d044885f66504d" target="_blank" className={styles.h1} style={{ textDecoration: 'none', color: '#ffffff', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00'}}>
          Dex Tools
          </a>

        <a href="https://twitter.com/FiFoLabs" target="_blank" className={styles.h1} style={{ textDecoration: 'none', color: '#ffffff', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00'}}>
        FiFo Labs Twitter
        </a>

        <h2 style={{ color: '#66ff00', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.1rem', width: '100%', fontWeight: '300'}}>
        FiFoLabs69@gmail.com
          </h2>

          <a href="https://www.geckoterminal.com/eth/pools/0xe5cf489df5fd1c1e3710bef745d044885f66504d" target="_blank" className={styles.h1} style={{ textDecoration: 'none', color: '#ffffff', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00'}}>
          Gecko Terminal
        </a>

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
          Naka Phlip • Looks Rare
          </a>
          <a href="https://x2y2.io/collection/nakaphlip/items" target="_blank" className={styles.h1} style={{ textDecoration: 'none', color: '#ffffff', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00'}}>
          Naka Phlip • X2Y2
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
height: '50vh', // Adjust the height as needed
}}></div>

<br />
<br />



<br />
<h2 style={{ color: 'white', textAlign: 'center', fontSize: '5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-.025rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
WE ARE Fifo LABs
      </h2>

<br />

        <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.1rem', width: '100%', fontWeight: '300' }}>
          est. Apr 2023
          </h2>
          <br />
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.1rem', width: '100%', fontWeight: '300' }}>
          Who: A group of artists, networkers, businessmen, and developers looking to take back the NFT space.
          </h2>
          <br />
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.1rem', width: '100%', fontWeight: '300' }}>
          What: FiFo Labs, $FiFo staking, and our genesis PFP “FiFo Phil” was the beginning of FiFo Labs.
          </h2>
          <br />
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.1rem', width: '100%', fontWeight: '300' }}>
          Where: Ethereum and possibly more blockchain(s) in the future.
          </h2>
          <br />
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.1rem', width: '100%', fontWeight: '300' }}>
          When: FiFo Labs started in late 2023, but the team consists of creatives that have worked together 3+ years.
          </h2>
          <br />
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.1rem', width: '100%', fontWeight: '300' }}>
          Why: FiFo Labs is here to create unique experiences for our growing community.
         </h2>


          <br />
          <br />

         
    <div className="image-container" style={{
    backgroundImage: `url('https://ipfs.io/ipfs/QmZWKvA9PBxrzAEFKg6LhJxjhTSA8K64hK1DLmBiZSjfCK')`,
    backgroundSize: 'contain', // Try using 'contain'
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '50vh', // Adjust the height as needed
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
