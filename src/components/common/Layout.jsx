import styled from "styled-components";
import PPIKKA from "../../sounds/피카츄.mp3"

function Layout(props) {

  const audio = new Audio(PPIKKA)
  const playSounds = () => {
    audio.volume = 0.05
    audio.play()
  }


  return (
    <StLayout>
      {props.children}
    </StLayout>
  );
};

const StLayout = styled.div`
  max-width: 1000px;
  min-height: 100vh;
  padding: 0 20px;
  margin: 0 auto;
`

export default Layout;