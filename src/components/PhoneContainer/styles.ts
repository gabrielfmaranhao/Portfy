import styled from "styled-components";
import { IPhoneBG, IPhoneBox } from "../../interfaces/styles";

export const PhoneBox = styled.div`
  width: 55rem;
  max-width: 65vw;
  height: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  position: relative;

  div {
    display: ${({display}:IPhoneBox) => display};
    flex-direction: column;
    gap: 1.5rem;
  }

  transform: rotate(20deg);
`;

export const PhoneContent = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: 100% 100%;
  animation: ${({aSettings}: IPhoneBG) => aSettings};

  @keyframes picture-transition-1 {
    0% {background-image: url("https://i.ibb.co/JCbpLNd/Dashboard.png")}
    18% {background-image: url("https://i.ibb.co/JCbpLNd/Dashboard.png")}
    20% {background-image: url("https://i.ibb.co/wsYLjFV/Curriculo.png")}
    38% {background-image: url("https://i.ibb.co/wsYLjFV/Curriculo.png")}
    40% {background-image: url("https://i.ibb.co/fQF2kHt/Feed.png")}
    58% {background-image: url("https://i.ibb.co/fQF2kHt/Feed.png")}
    60% {background-image: url("https://i.ibb.co/m0XhH3w/News.png")}
    78% {background-image: url("https://i.ibb.co/m0XhH3w/News.png")}
    80% {background-image: url("https://i.ibb.co/vDQfzFm/Modal.png")}
    98% {background-image: url("https://i.ibb.co/vDQfzFm/Modal.png")}
    100% {background-image: url("https://i.ibb.co/JCbpLNd/Dashboard.png")}
  }
  
  @keyframes picture-transition-2 {
    0% {background-image: url("https://i.ibb.co/vDQfzFm/Modal.png")}
    18% {background-image: url("https://i.ibb.co/vDQfzFm/Modal.png")}
    20% {background-image: url("https://i.ibb.co/JCbpLNd/Dashboard.png")}
    38% {background-image: url("https://i.ibb.co/JCbpLNd/Dashboard.png")}
    40% {background-image: url("https://i.ibb.co/wsYLjFV/Curriculo.png")}
    58% {background-image: url("https://i.ibb.co/wsYLjFV/Curriculo.png")}
    60% {background-image: url("https://i.ibb.co/fQF2kHt/Feed.png")}
    78% {background-image: url("https://i.ibb.co/fQF2kHt/Feed.png")}
    80% {background-image: url("https://i.ibb.co/m0XhH3w/News.png")}
    98% {background-image: url("https://i.ibb.co/m0XhH3w/News.png")}
    100% {background-image: url("https://i.ibb.co/vDQfzFm/Modal.png")}
  }
  
  @keyframes picture-transition-3 {
    0% {background-image: url("https://i.ibb.co/m0XhH3w/News.png")}
    18% {background-image: url("https://i.ibb.co/m0XhH3w/News.png")}
    20% {background-image: url("https://i.ibb.co/vDQfzFm/Modal.png")}
    38% {background-image: url("https://i.ibb.co/vDQfzFm/Modal.png")}
    40% {background-image: url("https://i.ibb.co/JCbpLNd/Dashboard.png")}
    58% {background-image: url("https://i.ibb.co/JCbpLNd/Dashboard.png")}
    60% {background-image: url("https://i.ibb.co/wsYLjFV/Curriculo.png")}
    78% {background-image: url("https://i.ibb.co/wsYLjFV/Curriculo.png")}
    80% {background-image: url("https://i.ibb.co/fQF2kHt/Feed.png")}
    98% {background-image: url("https://i.ibb.co/fQF2kHt/Feed.png")}
    100% {background-image: url("https://i.ibb.co/m0XhH3w/News.png")}
  }
  
  @keyframes picture-transition-4 {
    0% {background-image: url("https://i.ibb.co/fQF2kHt/Feed.png")}
    18% {background-image: url("https://i.ibb.co/fQF2kHt/Feed.png")}
    20% {background-image: url("https://i.ibb.co/m0XhH3w/News.png")}
    38% {background-image: url("https://i.ibb.co/m0XhH3w/News.png")}
    40% {background-image: url("https://i.ibb.co/vDQfzFm/Modal.png")}
    58% {background-image: url("https://i.ibb.co/vDQfzFm/Modal.png")}
    60% {background-image: url("https://i.ibb.co/JCbpLNd/Dashboard.png")}
    78% {background-image: url("https://i.ibb.co/JCbpLNd/Dashboard.png")}
    80% {background-image: url("https://i.ibb.co/wsYLjFV/Curriculo.png")}
    98% {background-image: url("https://i.ibb.co/wsYLjFV/Curriculo.png")}
    100% {background-image: url("https://i.ibb.co/fQF2kHt/Feed.png")}
  }
`;

// Animation flow
// C1: dash > cur > fed > nw > mod
// C2: mod > dash > cur > fed > nw
// C3: nw > mod > dash > cur > fed
// C4: fed > nw > mod > dash > cur
