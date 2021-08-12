import styled from 'styled-components';

export const Title=styled.h1`
    color: white;    

    &>span:first-child{
        text-shadow: ${props=>props.theme.titleShadow};
    }

    &>span:nth-last-child(1){
        color:${props=>props.theme.titleHomeColor};
    }

    &>span:nth-last-child(2){
        color:#E93D44;
    }

`