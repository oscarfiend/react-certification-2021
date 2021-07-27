import styled from 'styled-components';

export const Title=styled.h1`
    color: white;    

    &>span:first-child{
        text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5), 3px -2px 1px rgba(14,30,20,0.46);text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5), 3px -2px 6px rgba(14,30,20,0.4);
    }

    &>span:nth-last-child(1){
        color:black;
    }

    &>span:nth-last-child(2){
        color:#E93D44;
    }

`