import React from 'react'
import axios from 'axios'
import styled from "styled-components";
import Cards from './Cards'
import Forms from './Forms'



const Wrapper = styled.div`
    position:relative;
    top: 170px;
    left:400px;
    h3{
        margin-left:40%;
    }
`


export default class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userName:'',
            password:''
        }
    }


    handleInput = (e) =>{
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }


    handleSubmit = async (e) =>{
        e.preventDefault()
        const {title,salary,companyName,location,remote,logo,date} = this.state
        const allData = [...this.state.allJobData]
        const id = allData[allData.length - 1].id + 1
        const obj = {
            id:id,
            date:date,
            title : title,
            salary : salary,
            companyName : companyName,
            location : location,
            remote : remote,
            logo : logo,
        }
        const postDataLink = "http://localhost:3004/jobDetails"
        try{
            let addJobToserver = await axios.post(postDataLink, obj)
            console.log(addJobToserver)
            this.setState({
                allJobData: [...allData, obj]
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    render() {
        const {handleInput, handleSubmit} = this
        const {userName, password} = this.state
        return (
            <Wrapper className="col-lg-5 col-md-8 col-sm-12 col-12 rounded">
                <Cards>
                    <h3><u>Sign in</u></h3>
                    <Forms 
                        name = {['userName', 'password']}
                        value = {[userName, password]}
                        operationsInp = {handleInput} 
                        operationForm = {handleSubmit} 
                    />
                </Cards>
            </Wrapper>
        )
    }
}