import styled from "styled-components";
import PPIKKA from "../../sounds/피카츄.mp3";
import { useDispatch } from "react-redux";

function Layout(props) {
  // const audio = new Audio(PPIKKA)
  // const playSounds = () => {
  //   audio.volume = 0.05
  //   audio.play()
  // }

  return (
    <StContainer>
      <StLayout>{props.children}</StLayout>
    </StContainer>
  );
}

const StContainer = styled.div`
  background-image: url("https://pixabay.com/get/g6fb1a144736bb16f760b3415d19f96fc594b20916cb2580ddab90d981c0babe622608b4bbab53cc6c769bc4d056cc2fc.png");
  background-size: cover;
`;
const StLayout = styled.div`
  max-width: 1000px;
  min-height: 100vh;
  padding: 0 20px;
  margin: 0 auto;
`;

export default Layout;
