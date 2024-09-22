'use client';
import React from 'react';
import styled from 'styled-components';
import SlideBanner from '../../commons/components/SlideBanner';

const Wrapper = styled.div`
  div {
    margin: 0 auto 50px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const options = {
  loop: true,
  speed: 1000,
  pagination: true,
  navigation: true,
  autoplay: 4000,
};

const items = [
  { image: '/images/banner/banner1.png', link: '/', alt: '배너1' },
  { image: '/images/banner/banner2.png', link: '/', alt: '배너2' },
];

const StyleSlideBanner = styled(SlideBanner)`
  .swiper-pagination {
    bottom: 10px;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #000;
    opacity: 0.3;
  }
  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.blue};
    opacity: 0.8;
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: calc(50% - 60px);
    color: #ececec;
    opacity: 0.8;
  }
  .swiper-button-prev {
    left: calc(50% - 900px);
  }

  .swiper-button-next {
    right: calc(50% - 900px);
  }
`;

const MainBanner = ({}) => {
  return (
    <Wrapper>
      <StyleSlideBanner
        items={items}
        width={1920}
        height={540}
        options={options}
      />
    </Wrapper>
  );
};

export default React.memo(MainBanner);
