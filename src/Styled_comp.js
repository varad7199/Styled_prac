import styled from 'styled-components';


export const Container=styled.div`
   display:flex;
   flex-direction: column;
   /* justify-content: center; */
   align-content: center;
   /* text-align: center; */

`;
export const Heading=styled.h1`
height: fit-content;
    text-align: center;
    padding-bottom: 5rem;
    /* padding-left: 50%; */
    `;

export const Row=styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`;

export const Card=styled.div`
    display: flex;
    flex-direction: column;
    `;

export const Img1=styled.img`
    max-width: 15rem;
    max-height: 30rem;
    position: relative;
    z-index: 10;
    right: 2rem;
    bottom: 2rem;
    `;

export const Img2=styled.img `
    max-width: 5rem;
    max-height: 30rem;
    `;


export const Para=styled.p`
   z-index: 5;
   position: relative;
   left: 6rem;
   bottom: 2.5rem;
   width: 15rem;
   `;
