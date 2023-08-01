import React from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
import { IconButton } from '@mui/material';
import styled from 'styled-components';


const Header = () => {
  return (
    <Wrapper>
        <LogoWrapper>
            <IconButton>
                <PinterestIcon />
            </IconButton>
        </LogoWrapper>
        {/*<HomeWrapper>

        </HomeWrapper>
        <CreateButton>

        </CreateButton>
        <SearchWrapper>
            <SearchWrapper>

            </SearchWrapper>
        </SearchWrapper>  
        <IconsWrapper>
        </IconsWrapper>  */}        
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display; flex;
    align-items: centre;
    height: 56px;
    padding: 12px 4px 4px 16px;
    color: black;
`
const LogoWrapper = styled.div`
    MuiSvgIcon-root {
        color: #c60023;
        font-size: 32px;
        cursor: pointer;
`
export default Header;