import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftNakaPhlipAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";


const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
        <h2 style={{ color: 'white', textAlign: 'center', fontSize: '3rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.25rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        Naka Phlip Mint
          </h2>
<br />
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '0-.1rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        Presented by
          </h2>
<br />
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '3rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.25rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        FiFo Labs
          </h2>
      <br />
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-.025rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #ffffff' }}>
      20,000 more of the same unique crypto investors on the blockchain without commercial rights.
                    </h2>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <div className="image-container" style={{
    backgroundImage: `url('https://ipfs.io/ipfs/QmUHz43wSKm9UorWdjTTWU6EUZFRsj5b9SwCCqo9JpBsRa')`,
    backgroundSize: 'contain', // Try using 'contain'
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '50vh', // Adjust the height as needed
}}></div>


<br />

<h2 style={{ color: 'white', textAlign: 'center', fontSize: '3rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.25rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        Select below to mint Phlip
          </h2>

<div>
    <div style={{ display: 'flex', gap: '10px' }}>
  
      <Web3Button
        theme="dark"
        contractAddress={nftNakaPhlipAddress}
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        <h2 style={{ color: '#020052', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.25rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        1 Phlip
          </h2>
        
      </Web3Button>

      <Web3Button
        theme="dark"
        contractAddress={nftNakaPhlipAddress}
        action={(contract) => contract.erc721.claim(2)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
       <h2 style={{ color: '#020052', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.25rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        2
          </h2>
      </Web3Button>

      </div>

      <br />
      
      <div style={{ display: 'flex', gap: '10px' }}>

      <Web3Button
        theme="dark"
        contractAddress={nftNakaPhlipAddress}
        action={(contract) => contract.erc721.claim(3)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        <h2 style={{ color: '#020052', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.25rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        3
          </h2>
        
      </Web3Button>

      <Web3Button
        theme="dark"
        contractAddress={nftNakaPhlipAddress}
        action={(contract) => contract.erc721.claim(4)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
       <h2 style={{ color: '#020052', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.25rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        4
          </h2>
      </Web3Button>

      </div>

      <br />

      <div style={{ display: 'flex', gap: '10px' }}>

      <Web3Button
        theme="dark"
        contractAddress={nftNakaPhlipAddress}
        action={(contract) => contract.erc721.claim(5)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        <h2 style={{ color: '#020052', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.25rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        5
          </h2>
        
      </Web3Button>

      <Web3Button
        theme="dark"
        contractAddress={nftNakaPhlipAddress}
        action={(contract) => contract.erc721.claim(10)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
       <h2 style={{ color: '#020052', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.25rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        10
          </h2>
      </Web3Button>

      </div>

     <br />

      <div style={{ display: 'flex', gap: '10px' }}>

      <Web3Button
        theme="dark"
        contractAddress={nftNakaPhlipAddress}
        action={(contract) => contract.erc721.claim(20)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        <h2 style={{ color: '#020052', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.25rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        20 
          </h2>
        
      </Web3Button>

      <Web3Button
        theme="dark"
        contractAddress={nftNakaPhlipAddress}
        action={(contract) => contract.erc721.claim(30)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
       <h2 style={{ color: '#020052', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.25rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        30 
          </h2>
      </Web3Button>

      </div> 

<br />
<br />

      </div>
    </div>
  );
};

export default Mint;
