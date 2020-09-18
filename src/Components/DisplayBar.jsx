import React from 'react'
import Styled from 'styled-components'


const DisplayWrapper=Styled.div`
    img{
        height:500px;
        width:100%;
    }
`
export default function DisplayBar()
{
    return(
        <DisplayWrapper>
            <img src="https://res-1.cloudinary.com/the-university-of-melbourne/image/upload/s--w4v25cjK--/c_fill,f_auto,h_630,q_75,w_1200/v1/pursuit-uploads/1f8/0be/241/1f80be241399307eb19ecf3a49ba7f38b78281a5610c7bbeb1396dd76056.jpg" alt="display"/>
        </DisplayWrapper>
    )
}