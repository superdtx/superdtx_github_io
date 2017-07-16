import styled from 'styled-components';

export const Container = styled.div`
	min-width: 100%;
    min-height: 100%;

    height: 100%;
    width: 100%;

    position: absolute;
    z-index: 9;
    top: 0;
    left: 0;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    overflow: hidden;
`;

export const Video = styled.video`
	background-color: transparent;
    min-width: 100%;
    min-height: 100%;
    display: block;
    margin: 0 auto;

    z-index: 1;
`;