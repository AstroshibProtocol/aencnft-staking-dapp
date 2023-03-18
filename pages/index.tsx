import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>AstroShib NFT Staking Dapp</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/drop.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Mint AENC NFT</h2>
          <p className={styles.selectBoxDescription}>
            Mint an NFT from our AENC NFT collection for only 1500 $ASROB.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <Image src="/icons/token.webp" alt="token" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Stake Your AENC NFTs</h2>
          <p className={styles.selectBoxDescription}>
            Stake your AENC NFT to earn $ASROB Tokens every minute. Powered by <b>AstroShib Labs</b> & <b>Thirdweb</b>{" "}
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
