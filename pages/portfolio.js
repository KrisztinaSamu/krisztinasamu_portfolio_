import Link from "next/link";
import Image from "next/image";
import cardList from "../pages/projectsData";
import styles from "../styles/portfolio.module.css";

export default function PortfolioPage() {
  return (
    <div className={styles.projectContainer}>
      <h1> Portfolio</h1>
      <div>
        {cardList.map((card) => (
          <div className={styles.cardContainer}>
            <div className={styles.imgBox}>
              <Image
                src={card.img1}
                className={styles.cardImg}
                alt=""
                width={600}
                height={600}
              />
              <Image
                src={card.img2}
                className={`${styles.cardImg} ${styles.flipImg}`}
                alt=""
                width={600}
                height={600}
              />
            </div>
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <p>{card.description}</p>
            <p>{card.techDescription}</p>
          </div>
        ))}
      </div>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </div>
  );
}
