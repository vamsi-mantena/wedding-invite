import Image from "next/image";
import styles from "./page.module.css";
import ganesha from "../../../public/images/mainPage/ganesha.avif";
import pallakiAbbay from "../../../public/images/mainPage/pallaki_abbay-removebg-preview.avif";
import pallakiAmmayi from "../../../public/images/mainPage/Pallaki_Ammay_Fin-removebg-preview.avif";

const Invitation = () => {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <div className={styles.imageWrapper}>
          <Image src={pallakiAbbay} alt="image" width={133} height={83} />
          <Image src={pallakiAmmayi} alt="image" width={126} height={83} />
        </div>
        <div className={styles.ganeshaWrapper}>
          <Image src={ganesha} alt="image" width={65} height={65} />
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Wedding Invitation</div>
          <div className={styles.subTitle}>
            Join us to celebrate our wedding
          </div>
        </div>

        <div className={styles.groomDetailsWrapper}>
          <div className={styles.name}>Groom name</div>
          <div className={styles.context}>
            S/o Groom father name & Smt Groom mother name
          </div>
        </div>
        <div className={styles.and}>&</div>
        <div className={styles.brideDetailsWrapper}>
          <div className={styles.name}>Bride name</div>
          <div className={styles.context}>
            S/o Bride father name & Smt Bride mother name
          </div>
        </div>
        <div className={styles.sumuhurthamWrapper}>
          <div className={styles.name}>Sumuhurtham</div>
          <div className={styles.context}>Day</div>
          <div className={styles.context}>Date</div>
          <div className={styles.context}>Time</div>
          <div className={styles.context}>{`(extra)`}</div>
        </div>
        <div className={styles.venueWrapper}>
          <div className={styles.name}>Venue</div>
          <div className={styles.context}>Location</div>
        </div>
        <div className={styles.dinnerWrapper}>
          <div className={styles.name}>Dinner</div>
          <div className={styles.context}>Date & Day</div>
          <div className={styles.context}>Time</div>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
