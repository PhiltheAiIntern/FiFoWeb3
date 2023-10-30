import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useContractRead,
  useOwnedNFTs,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import NFTCard from "../components/NFTCard";
import {
  nftDropContractAddress,
  stakingContractAddress,
  tokenContractAddress,
} from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

const Stake: NextPage = () => {
  const address = useAddress();
  const { contract: nftDropContract } = useContract(
    nftDropContractAddress,
    "nft-drop"
  );
  const { contract: tokenContract } = useContract(
    tokenContractAddress,
    "token"
  );
  const { contract, isLoading } = useContract(stakingContractAddress);
  const { data: ownedNfts } = useOwnedNFTs(nftDropContract, address);
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
  const { data: stakedTokens } = useContractRead(contract, "getStakeInfo", [
    address,
  ]);

  useEffect(() => {
    if (!contract || !address) return;

    async function loadClaimableRewards() {
      const stakeInfo = await contract?.call("getStakeInfo", [address]);
      setClaimableRewards(stakeInfo[1]);
    }

    loadClaimableRewards();
  }, [address, contract]);

  async function stakeNft(id: string) {
    if (!address) return;

    const isApproved = await nftDropContract?.isApproved(
      address,
      stakingContractAddress
    );
    if (!isApproved) {
      await nftDropContract?.setApprovalForAll(stakingContractAddress, true);
    }
    await contract?.call("stake", [[id]]);
  }

  if (isLoading) {
    return <div>...just wait retards</div>;
  }

  return (
    <div className={styles.container}>
      <h2 style={{ color: 'white', textAlign: 'center', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.25rem', width: '100%', fontSize: '6rem', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
            Stake FiFo Phil
          </h2>
      <hr className={`${styles.divider} ${styles.spacerTop}`} />

      {!address ? (
        <ConnectWallet />
      ) : (
        <>
        <h2 style={{ color: 'white', textAlign: 'center', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.25rem', width: '100%', fontSize: '3rem', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
        $FGem
          </h2>
          <div className={styles.tokenGrid}>
            <div className={styles.tokenItem}>
            <h2 className={styles.nakaPixelText} style={{ color: '#ffffff' }}>Your earned $FGem</h2>

              <p className={styles.tokenValue}>
                <b>
                  {!claimableRewards
                    ? "Loading..."
                    : ethers.utils.formatUnits(claimableRewards, 18)}
                </b>{" "}
                
                {tokenBalance?.symbol}
              </p>
            </div>
            <div className={styles.tokenItem}>
            <h2 className={styles.nakaPixelText} style={{ color: '#ffffff' }}>Total $FGem</h2>

              <p className={styles.tokenValue}>
                <b>{tokenBalance?.displayValue}</b> {tokenBalance?.symbol}

              </p>
            </div>
          </div>

          <Web3Button
            action={(contract) => contract.call("claimRewards")}
            contractAddress={stakingContractAddress}
            style={{
              display: 'inline-flex',
              width: 'auto',
              height: '3.5rem',
              lineHeight: '4rem',
              padding: '0 2rem',
              verticalAlign: 'middle',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.025rem',
              fontSize: '1em',
              fontWeight: 600,
              borderRadius: '0.5rem',
              flexDirection: 'row-reverse',
              transition: 'none',
              backgroundColor: '#66ff00', 
            }}
            
          >
            <h2 style={{
              color: '#020052',
              textAlign: 'center',
              fontFamily: 'NakaPixel, sans-serif',
              margin: 0,
              letterSpacing: '-0.25rem',
              width: '100%',
              fontSize: '2rem',
              fontWeight: 300,
              textShadow: '0rem 0rem 0.75rem #66ff00',
            }}>
              Claim
            </h2>
          </Web3Button>

          <hr className={`${styles.divider} ${styles.spacerTop}`} />
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '4rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.25rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #66ff00' }}>
            Phils Working in the Mine
          </h2>
          <div className={styles.nftBoxGrid}>
            {stakedTokens &&
              stakedTokens[0]?.map((stakedToken: BigNumber) => (
                <NFTCard
                  tokenId={stakedToken.toNumber()}
                  key={stakedToken.toString()}
                />
              ))}
          </div>

          <hr className={`${styles.divider} ${styles.spacerTop}`} />
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '4rem', fontFamily: 'NakaPixel, sans-serif', margin: '0', letterSpacing: '-0.25rem', width: '100%', fontWeight: '300', textShadow: '0rem 0rem 0.75rem #ffffff' }}>
          Phils on Layoff
          </h2>
          
          <div className={styles.nftBoxGrid}>
            {ownedNfts?.map((nft) => (
              
              <div className={styles.nftBox} key={nft.metadata.id.toString()}>
                 
                <ThirdwebNftMedia
                  metadata={nft.metadata}
                  className={styles.nftMedia}
                  style={{ width: '190px', height: '190px' }}
                />
                <h3>{nft.metadata.name}</h3>
                <Web3Button
                  contractAddress={stakingContractAddress}
                  action={() => stakeNft(nft.metadata.id)}
                >
                  Goto Work
                </Web3Button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Stake;