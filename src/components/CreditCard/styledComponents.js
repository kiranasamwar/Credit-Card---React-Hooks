import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`

export const CardContainer = styled.div`
  width: 50%;
  background-color: #3b4b69;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 80px;
`

export const CardUrlContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  padding-top: 70px;
  padding-left: 70px;
  height: 300px;
  width: 480px;
  border-radius: 25px;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
`

export const InputContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const InputBox = styled.div`
  padding: 50px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  text-decoration-line: underline;
`

export const CardNumberText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
  font-weight: 800;
  padding-top: 10px;
`

export const CardHolderName = styled.p`
  font-family: 'Roboto';
  color: #d3d9e0;
  font-weight: 500;
`

export const Name = styled.p`
  font-family: 'Roboto';
  color: #c3cad9;
  font-size: 20px;
  margin: 0px;
`

export const InputHolderName = styled.input`
  margin: 10px;
  padding-top: 7px;
  padding-bottom: 7px;
`

export const InputCardNumber = styled.input`
  margin: 10px;
  padding-top: 7px;
  padding-bottom: 7px;
`

export const PaymentMethodText = styled.h1`
  font-family: 'Roboto';
  color: #475569;
`
