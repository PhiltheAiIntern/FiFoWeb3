import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftNakaPhlipAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";
import { ConnectWallet } from "@thirdweb-dev/react";

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <ConnectWallet/>
      <br />
        <h2 style={{ color: 'white', textAlign: 'center', fontSize: '3rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.25rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        Naka Twins Mint
          </h2>
<br />
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '0rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        Presented by
          </h2>
<br />
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '3rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.25rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        FiFo Labs
          </h2>
      <br />
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-.025rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #ffffff' }}>
      20,000 more of the same unique crypto investors on the blockchain without commercial rights.
                    </h2>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <a href="https://looksrare.org/collections/0x75a332E626a0B421C3c5C405474b9727aDB5dDff?queryID=19603e03ef4ae0e029229b900ce0b1be" target="_blank" className={styles.h1} style={{ textDecoration: 'none', color: '#ffffff', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00'}}>
          Naka Twin on • Looks Rare
          </a>
          <a href="https://x2y2.io/collection/nakaphlip/items" target="_blank" className={styles.h1} style={{ textDecoration: 'none', color: '#ffffff', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00'}}>
          Naka Twin on • X2Y2
          </a>
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
<br />
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
              Mint 1 Twin
                </h2>

      </Web3Button>
      </div>
      <br />
      <div style={{ display: 'flex', gap: '10px' }}>
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
              Mint 2 Twins
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
              Mint 3 Twins
                </h2>

      </Web3Button>
</div>
      <br />
      <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-.025rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #ffffff' }}>
      Follow link to mint custom # of Twins.
                    </h2>
<br />
              <div id="container05" className="style1 container default">
                  <div className="wrapper">
                        <div className="inner" data-onvisible-trigger="1">
                          <button className="large-button">
            
                              <a href="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x75a332E626a0B421C3c5C405474b9727aDB5dDff&chain=%7B%22name%22%3A%22Ethereum+Mainnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fethereum.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22eth%22%2C%22chainId%22%3A1%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22ethereum%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fethereum%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=3c65f981d8b41f27666b06aa2ccc1075&theme=light&primaryColor=purple" target="_blank" className={styles.h1} style={{ textDecoration: 'none', color: '#020052', textAlign: 'center', fontSize: '2rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.15rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
                              +3
                              </a>
                          
                          </button>

                        </div>
                  </div>
                  
        <br />
        <br />
              </div>
        <div>
      </div>
    </div>
  );
};

export default Mint;
