import styled from 'styled-components';

export const Content = styled.main`
  margin: 0 auto;
  overflow-x: hidden;
  height: 81vh;

  .slick-slider .slick-initialized {
    position: relative;
    z-index: -1;
  }

  .slick-prev:before, .slick-next:before {
    color: #fff;
    font-size: 5rem;
    position: absolute;
    top: -70%;
  }

  button.slick-prev {
    position: absolute;
    z-index: 1;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  }

  button.slick-next {
    position: absolute;
    z-index: 1;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  }

  .slick-prev:before {
    z-index: 1;
    right: -9vw;
    position: absolute;
  }

  .slick-next:before {
    z-index: 1;
    position: absolute;
    left: -9vw;
  }

  .slick-list {
    margin: 0 auto;
    height: 475px;
    min-width: 30rem;

    .slick-slide {
      margin: 0 3rem;
    }

   }

   @media (max-width: 1270px) {
    .slick-list .slick-slide {
      margin: 0 4rem;
    }
   }

   @media (max-width: 1175px) {
    .slick-list .slick-slide {
      margin: 0 5rem;
    }
   }

   @media (max-width: 1100px) {
    .slick-list .slick-slide {
      margin: 0 3rem;
    }
   }

   @media (max-width: 1030px) {
    .slick-list .slick-slide {
      margin: 0 4rem;
    }
   }

   @media (max-width: 950px) {
    .slick-list .slick-slide {
      margin: 0 5rem;
    }
   }

   @media (max-width: 860px) {
    .slick-list .slick-slide {
      margin: 0 6rem;
    }
   }

   @media (max-width: 790px) {
    .slick-list .slick-slide {
      margin: 0rem 7rem;
    }
   }

   @media (max-width: 710px) {
    .slick-list .slick-slide {
      margin: 0rem 8rem;
    }

    .slick-prev:before {
      right: -12vw;
    }

    .slick-next:before {
      left: -12vw;
    }
   }

   @media (max-width: 620px) {
    .slick-list .slick-slide {
      margin: 0rem 9rem;
    }
   }

   @media (max-width: 600px) {
    .slick-list .slick-slide {
      margin: 0rem 7rem;
    }
   }

   @media (max-width: 540px) {
    .slick-list .slick-slide {
      margin: 0rem 8rem;
    }
   }

   @media (max-width: 500px) {
    .slick-list .slick-slide {
      margin: 0rem 0rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .slick-prev:before {
      right: -15vw;
    }

    .slick-next:before {
      left: -15vw;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  padding: 2rem 11.5rem 2rem 10.5rem;
  align-items: center;
  justify-content: left;
  margin-left: -4rem ;

  svg{
    margin-right: 2rem;
  }

  h3 {
    color: #FD7C5C;
    font-size: 3.6rem;
    font-weight: 700;
  }

  @media (max-width: 500px) {
      padding: 2rem 8.5rem 2rem 8.5rem;

      svg{
        width: 28px;
        height: 28px;
      }
      h3 {
        font-size: 2.8rem;
      }
   }
`;

