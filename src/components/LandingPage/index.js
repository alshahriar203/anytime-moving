import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import withHeader from 'components/withHeader';
import HeroSection from 'components/HeroSection';
import HowWeWork from 'components/HowWeWork';
import Navbar from 'components/Navbar';
import ReviewSection from 'components/ReviewSection';
// import Services from 'components/Services';
import WhyChooseUs from 'components/WhyChooseUs';
import FooterFinal from 'components/FooterFinal';

import styles from './index.module.scss';

function LandingPage(props) {
  return (
    <div className={cn(styles.root, props.className, 'landing-page')}>
      <Navbar/>
      <HeroSection />
      <WhyChooseUs />
      <HowWeWork />
      <ReviewSection />
      <FooterFinal />
      
      {/* <div className={styles.component}>
        <HeroSection />
      </div>
      <div className={styles.component1}>
        <Services />
      </div>
      <div className={styles.component2}>
        <WhyChooseUs />
      </div>
      <div className={styles.component3}>
        <HowWeWork />
      </div>
      <div className={styles.component4}>
        <ReviewSection />
      </div>
      <div className={styles.component5}>
        <Navbar />
      </div> */}
    </div>
  );
}

LandingPage.propTypes = {
  className: PropTypes.string
};

export default withHeader(LandingPage);
