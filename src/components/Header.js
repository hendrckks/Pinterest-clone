import React, {useState} from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
import { IconButton } from '@mui/material';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TextsmsIcon from '@mui/icons-material/Textsms';



const Header = (props) => {
    
    const [input, setInput] = useState("")

    function onSearchSubmit(e) {
        e.preventDefault();
        props.onSubmit(input);
}

  return (
    <Wrapper>
        <LogoWrapper>
            <IconButton>
                <PinterestIcon />
            </IconButton>
        </LogoWrapper>
        <HomeWrapper>
            <a href='/'>HomePage</a>
        </HomeWrapper>  
        <CreateButton>
            <a href='/'>Create</a>
        </CreateButton>
        <SearchWrapper>
            <SearchBarWrapper>
                <IconButton>
                   <SearchIcon />
                </IconButton>
                <form>
                    <input type="text" placeholder="search" onChange={(e) => 
                        setInput(e.target.value)}/>
                    <button type="submit" onClick={onSearchSubmit}></button>
                </form>
            </SearchBarWrapper>
        </SearchWrapper>  
        <IconsWrapper>
            <IconButton>
              <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
              <TextsmsIcon />
            </IconButton>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton>
        </IconsWrapper>     
    </Wrapper>
  )
}

const Styles = styled.div`
    display: flex;
    height: 48px;
    min-width: 123px;
    justify-content: center;
    border-radius: 50px;
    cursor: pointer;
    align-items: center;
    text-align: center;
`
const Wrapper = styled.div`
    display: flex;
    align-items: centre;
    height: 56px;
    padding: 12px 4px 4px 16px;
    color: black;
`
const LogoWrapper = styled.div`
    .MuiSvgIcon-root {
        color: #e60023;
        font-size: 32px;
        cursor: pointer;
`

const HomeWrapper = styled(Styles)`
    background-color: rgb(17,27,27);

    a {
        text-decoration: none;
        color: white;
        font-weight: 700;
        font-size: 13px;
        box-shadow: 2px;
    }
`
const CreateButton = styled(Styles)`
    background-color: white;
    
    :hover {
        background-color: #e1e1e1;
    }
    
    a{
        text-decoration: none;
        color: black;
        font-weight: 700;
        font-size: 15px;
    }
`
const SearchWrapper = styled.div`
    flex: 1;
    margin-top: 2px;
    
`
const SearchBarWrapper = styled.div`
    height: 42px;
    cursor: text;
    background-color: #e2e2e2;
    border-radius: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    border: none;
    padding-left: 10px;

    form {
        display: flex;
        flex: 1;
    }

    form > input {
        border: none;
        background-color: transparent;
        width: 100%;
        margin-left: 5px;
        font-size: 16px;
    }

    form > button {
        display: none;
    }

    input:focus {
        outline: none;
    }
`
const IconsWrapper = styled.div`
    margin-left: 5px;
`

export default Header;