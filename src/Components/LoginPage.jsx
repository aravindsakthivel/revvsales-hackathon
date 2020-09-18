import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'
import Form from './Form'

const Wrapper = styled.div`
    position:relative;
    bottom: 400px;
    left:700px;
    h3{
        margin-left:40%;
    }
`
export default function LoginPage(props)
{        
        const {userName, password,handleInput, handleSubmit} = props
        return (
            <Wrapper className="col-lg-5 col-md-8 col-sm-12 col-12 rounded">
                <Cards>
                    <h3><u>Sign in</u></h3>
                    <Form
                        name = {['userName', 'password']}
                        value = {[userName, password]}
                        operationsInp = {handleInput} 
                        operationForm = {handleSubmit} 
                    />
                </Cards>
            </Wrapper>
        )
}