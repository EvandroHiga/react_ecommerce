import { TopBarContainer, FancyButton, FaShoppingCartIcon } from "./styles";

function TopBar(props){
    return (
        <TopBarContainer>
            <a>
                <h1>{props.title}</h1>
            </a> 
            <FancyButton to="/cart"> 
                <FaShoppingCartIcon /> Checkout 
            </FancyButton> 
        </TopBarContainer>
    )
}

export default TopBar;