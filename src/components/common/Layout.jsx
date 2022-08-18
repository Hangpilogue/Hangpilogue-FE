import styled from "styled-components";


function Layout(props) {
  return (
    <StContainer>
      <StLayout>{props.children}</StLayout>
    </StContainer>
  );
}

const StContainer = styled.div`
  background-image: url('img/beach-3121393.png');
  background-size: cover;
  background-attachment: fixed;
`;

const StLayout = styled.div`
  max-width: 1000px;
  min-height: 100vh;
  padding: 0 20px;
  margin: 0 auto;
`;

export default Layout;
