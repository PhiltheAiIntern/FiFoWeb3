import {
  ThirdwebNftMedia,
  useContract,
  useNFT,
  Web3Button,
} from "@thirdweb-dev/react";
import type { FC } from "react";
import {
  nftDropContractAddress,
  stakingContractAddress,
} from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

interface NFTCardProps {
  tokenId: number;
}

const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {
  const { contract } = useContract(nftDropContractAddress, "nft-drop");
  const { data: nft } = useNFT(contract, tokenId);

  return (
    <>
      {nft && (
        <div className={styles.nftBox} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {nft.metadata && (
          <ThirdwebNftMedia
            metadata={nft.metadata}
            className={styles.nftMedia}
            style={{ width: '195px', height: '195px' }}
          />
        )}
        <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.25rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        {nft.metadata.name}
          </h2>
        
        <Web3Button
          action={(contract) => contract?.call("withdraw", [[nft.metadata.id]])}
          contractAddress={stakingContractAddress}
        >
          <h2 style={{ color: '#020052', textAlign: 'center', fontSize: '1.5rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.25rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
          Layoff Papers
          </h2>
           
        </Web3Button>
      </div>
      
      )}
    </>
  );
};
export default NFTCard;
