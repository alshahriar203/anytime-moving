import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import OverallReview from '../OverallReview';
import styles from './index.module.scss';

function ReviewSection(props) {
  return (
    <section id="review-section" className={cn(styles.reviewsSection, props.className, 'review-section')}>
      {/* Customer reviews section */}

      <div className={styles.titleContainer}>
        <p className={styles.sectionTitle}>Our Clients’ Satisfaction Comes First</p>
      </div>

      <OverallReview/>

      <div className={styles.reviewsContainer}>
        {/* Container for review cards */}

        <article className={styles.reviewCard}>
          <div className={styles.reviewContent}>
            <div className={styles.reviewHeader}>
              <div className={styles.userInfo}>
                <img
                  className={styles.userAvatar}
                  src={'/assets/a14ebde15a80c6dcd89c0ca448413ef2.png'}
                  alt="alt text"
                />

                <div className={styles.userDetails}>
                  <p className={styles.userName}>Conor Lansdale</p>
                  <p className={styles.reviewTime}>8 hours ago</p>
                </div>
              </div>

              <img
                className={styles.moreOptionsBtn}
                src={'/assets/9fe4bcfbeb3e7f5d095c67e6f7a1e46d.svg'}
                alt="alt text"
              />
            </div>

            <div className={styles.ratingStars}>
              <img className={styles.starIcon} src={'/assets/036dbf9383b24d2342cd1672b944bfd3.svg'} alt="alt text" />
              <img className={styles.image3} src={'/assets/036dbf9383b24d2342cd1672b944bfd3.svg'} alt="alt text" />
              <img className={styles.image3} src={'/assets/036dbf9383b24d2342cd1672b944bfd3.svg'} alt="alt text" />
              <img className={styles.image3} src={'/assets/036dbf9383b24d2342cd1672b944bfd3.svg'} alt="alt text" />
              <img className={styles.image3} src={'/assets/036dbf9383b24d2342cd1672b944bfd3.svg'} alt="alt text" />
            </div>

            <p className={styles.reviewText}>
              Bruce (great driver), but wished the inventory was
              <br />
              recorded in a digital format so it would be easier
              <br />
              to complete upon delivery and for expense
              <br />
              reporting.
            </p>
          </div>
        </article>

        <article className={styles.reviewCard}>
          <div className={styles.reviewContent}>
            <div className={styles.reviewHeader}>
              <div className={styles.userInfo}>
                <img
                  className={styles.userAvatar}
                  src={'/assets/a14ebde15a80c6dcd89c0ca448413ef2.png'}
                  alt="alt text"
                />

                <div className={styles.userDetails}>
                  <p className={styles.userName}>Conor Lansdale</p>
                  <p className={styles.reviewTime}>8 hours ago</p>
                </div>
              </div>

              <img
                className={styles.moreOptionsBtn}
                src={'/assets/44c65ea09dc1bd87d57e0390eb4b6097.svg'}
                alt="alt text"
              />
            </div>

            <div className={styles.ratingStars}>
              <img className={styles.starIcon} src={'/assets/036dbf9383b24d2342cd1672b944bfd3.svg'} alt="alt text" />
              <img className={styles.image3} src={'/assets/036dbf9383b24d2342cd1672b944bfd3.svg'} alt="alt text" />
              <img className={styles.image3} src={'/assets/036dbf9383b24d2342cd1672b944bfd3.svg'} alt="alt text" />
              <img className={styles.image3} src={'/assets/036dbf9383b24d2342cd1672b944bfd3.svg'} alt="alt text" />
              <img className={styles.image3} src={'/assets/036dbf9383b24d2342cd1672b944bfd3.svg'} alt="alt text" />
            </div>

            <p className={styles.reviewText}>
              Bruce (great driver), but wished the inventory was
              <br />
              recorded in a digital format so it would be easier
              <br />
              to complete upon delivery and for expense
              <br />
              reporting.
            </p>
          </div>
        </article>

        <article className={styles.reviewCard}>
          <div className={styles.reviewContent}>
            <div className={styles.reviewHeader}>
              <div className={styles.userInfo}>
                <img
                  className={styles.userAvatar}
                  src={'/assets/a14ebde15a80c6dcd89c0ca448413ef2.png'}
                  alt="alt text"
                />

                <div className={styles.userDetails}>
                  <p className={styles.userName}>Conor Lansdale</p>
                  <p className={styles.reviewTime}>8 hours ago</p>
                </div>
              </div>

              <img
                className={styles.moreOptionsBtn}
                src={'/assets/9f4943c0d93a1fb20d42d7a35ff289cf.svg'}
                alt="alt text"
              />
            </div>

            <div className={styles.ratingStars}>
              <img className={styles.starIcon} src={'/assets/036dbf9383b24d2342cd1672b944bfd3.svg'} alt="alt text" />
              <img className={styles.image3} src={'/assets/036dbf9383b24d2342cd1672b944bfd3.svg'} alt="alt text" />
              <img className={styles.image3} src={'/assets/036dbf9383b24d2342cd1672b944bfd3.svg'} alt="alt text" />
              <img className={styles.image3} src={'/assets/036dbf9383b24d2342cd1672b944bfd3.svg'} alt="alt text" />
              <img className={styles.image3} src={'/assets/036dbf9383b24d2342cd1672b944bfd3.svg'} alt="alt text" />
            </div>

            <p className={styles.reviewText}>
              Bruce (great driver), but wished the inventory was
              <br />
              recorded in a digital format so it would be easier
              <br />
              to complete upon delivery and for expense
              <br />
              reporting.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

ReviewSection.propTypes = {
  className: PropTypes.string
};

export default ReviewSection;
