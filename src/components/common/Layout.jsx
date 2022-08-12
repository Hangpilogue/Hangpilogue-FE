import styled from "styled-components";

function Layout(props) {

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