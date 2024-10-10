import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './index.module.scss';

function HeroSection(props) {
  return (
    <section className={cn(styles.movingServicesSection, props.className, 'hero-section')} 
    style={{ '--src': `url(/assets/bg-home-hero.jpg)` }}>
      {/* Main section for moving services information and quote request */}

      <div className={styles.contentContainer}>
        <div className={styles.serviceDescription}>
          <div className={styles.titleWrapper}>
            <p className={styles.mainHeading}>Reliable Moving Services, Tailored for You</p>
          </div>

          <div className={styles.descriptionWrapper}>
            <p
              className={
                styles.serviceDetails
              }>{`Whether you're moving across town or across the country, our expert team ensures a seamless, stress-free experience. We handle your belongings with care, so you can focus on settling into your new home. Get a free quote today and make your move with confidence.`}</p>
          </div>
        </div>

        <div className={styles.quoteForm}>
          <div className={styles.formTitleWrapper}>
            <p className={styles.formHeading}>Are You Moving?</p>
          </div>

          <p className={styles.formSubtitle}>Get Your Free Moving Estimate Now</p>

          <div className={styles.originAddressField}>
            <p className={styles.originLabel}>Moving From</p>

            <div className={styles.originInputBox}>
              <p className={styles.originPlaceholder}>Address/ZipCode</p>
            </div>
          </div>

          <div className={styles.destinationAddressField}>
            <p className={styles.destinationLabel}>Moving From</p>

            <div className={styles.destinationInputBox}>
              <p className={styles.destinationPlaceholder}>Address/ZipCode</p>
            </div>
          </div>

          <button className={styles.nextBtn}>
            {/* TODO */}
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  className: PropTypes.string
};

export default HeroSection;
