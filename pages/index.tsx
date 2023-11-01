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
      <h1 className="h1 style3">FiFo Labs</h1>
      <br />
      <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-.025rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
              Presents
                    </h2>
      <br />
      <h1 className="h1 style3">Naka Phlip</h1>
      <br />
      <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
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
<br />

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
      <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
      Check out the Twitter Thread for staking instructions
         </h2>   
      


      <br />
      <div id="container05" className="style1 container default">
        <div className="wrapper">
          <div className="inner" data-onvisible-trigger="1">
            <button className="large-button">
            <a href="https://twitter.com/FiFoLabs/status/1713384015141699675" target="_blank" className={styles.h1} style={{ textDecoration: 'none', color: '#020052', textAlign: 'center', fontSize: '2rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
            Thread
            
                
                </a>
            </button>
          </div>
        </div>
        
    </div>
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
          <p className={styles.selectBoxDescription}>
            
          </p>
        </div>

        <h1 className="h1 style3">Staking is LIVE</h1>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/stake")}
        >
          <Image src="/icons/token.webp" alt="token" width={64} height={64} />

          <h2 className={styles.selectBoxTitle}> Stake FiFo Phil</h2>
          
          <p className={styles.selectBoxDescription}>
            
          </p>
          </div>
        </div>

        
</div>
<br />
<h2 style={{ color: 'white', textAlign: 'center', fontSize: '2rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.1rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
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

        <h2 style={{ color: '#66ff00', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.1rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #ffffff' }}>
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
    <h1 className="style3">WE ARE Fifo LABs</h1>
        <br />
        <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.1rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #ffffff' }}>
          est. Apr 2023
          </h2>
          <br />
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.1rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #ffffff' }}>
          Who: A group of artists, networkers, businessmen, and developers looking to take back the NFT space.
          </h2>
          <br />
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.1rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #ffffff' }}>
          What: FiFo Labs, $FiFo staking, and our genesis PFP “FiFo Phil” was the beginning of FiFo Labs.
          </h2>
          <br />
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.1rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #ffffff' }}>
          Where: Ethereum and possibly more blockchain(s) in the future.
          </h2>
          <br />
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.1rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #ffffff' }}>
          When: FiFo Labs started in late 2023, but the team consists of creatives that have worked together 3+ years.
          </h2>
          <br />
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1.25rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.1rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #ffffff' }}>
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
   <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
   Created by&nbsp;
         </h2>
         <a href="https://twitter.com/FiFoLabs" target="_blank" className={styles.h1} style={{ textDecoration: 'none', color: '#020052', textAlign: 'center', fontSize: '2rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
         FiFo Labs&nbsp; 
         </a>
        <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        All rights reserved.
         </h2>
         
    </div>
    
  );
};

export default Home;
