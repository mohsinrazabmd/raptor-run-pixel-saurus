import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  } 
 body
{
  overflow-x: hidden !important;
  font-family: 'Poppins', sans-serif;

}

iframe
{
  position: absolute !important;
  width: none !important;
  top: none !important;
  left: none !important;
  right: none !important;
  z-index: -5 !important;
}

/* Loader */
.cover-spin {
 position: fixed;
 width: 100%;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background:rgba(0,0,0,0.4);
 z-index: 999999;
 display: flex;
 justify-content: center;
 align-items: center;
 color:white;

}


 
/* Models styles  */
.ant-modal-footer
  {
    display: none;
  }
  .ant-modal-close
  {
    display: none;
  }
  .ant-modal-content
  {
   background: none;
  }
  .ant-modal-body
  {
    padding: 0px;
  }
  .ant-modal-mask
  {
    background-color: rgb(0 0 0 / 78%) ;
  }
  .closeModelInput
  {
    transform: translateY(-2px);
  }
    .ant-space-align-baseline
  {
    display: flex;
    justify-content:center  ;
  }
  .modalInputMale
  {
    border-top-right-radius:7px;
  border-bottom-right-radius:7px;
  transform: translateX(-6px);
  }
  .ant-form-vertical .ant-form-item-label>label {
  
 
    font-weight:600;
}

  /* Models styles */



  
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  /* height: 300px; */
  filter: blur(4px);

  @media (max-height:700px) {
    width: 200px;
  }
}

.swiper-slide-active {
  filter: blur(0px);
}

.swiper-slide img {
  display: block;
  width: 100%;
  /* height: 350px; */
  height: 100%;
}

.swiper-3d .swiper-slide-shadow-left {
  background-image: none;
}

.swiper-3d .swiper-slide-shadow-right {
  background-image: none;
}

.swiper-button-next {
  /* background-image: url(); */
  margin-right: 10rem;
  background-repeat: no-repeat !important;
  width: 4rem;
}

.swiper-button-next::after {
  display: none;
}

.swiper-button-prev {
  color: black;
  /* background-image: url(); */
  margin-left: 10rem;
  background-repeat: no-repeat !important;
  width: 100% !important;
}

.swiper-button-prev::after {
  display: none;
}

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  display: none;
}

@media (max-width: 1660px) {
  .swiper-button-prev {
    margin-right: -2px;
  }
}

@media (max-width: 1480px) {
  .swiper-button-prev {
    margin-right: 0;
  }
}

@media (max-width: 756px) {
  .swiper-button-prev {
    display: none;
  }
}

@media (max-width: 1660px) {
  .swiper-button-next {
    margin-right: -2px;
  }
}

@media (max-width: 1480px) {
  .swiper-button-next {
    margin-right: 0;
  }
}

@media (max-width: 756px) {
  .swiper-button-next {
    display: none;
  }
}

a 
{
  text-decoration:none !important;
}
   
 
`;

export default GlobalStyle;
