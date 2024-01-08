import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  InputContainer,
  CardUrlContainer,
  Heading,
  InputHolderName,
  CardNumberText,
  Name,
  InputBox,
  CardHolderName,
  PaymentMethodText,
  InputCardNumber,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setNumber] = useState('')
  const [holderName, setHolderName] = useState('')

  const onCardNumber = event => {
    setNumber(event.target.value)
  }

  const onHolderName = event => {
    setHolderName(event.target.value)
  }

  const CardHolderNameUpperCase = holderName.toUpperCase()

  return (
    <MainContainer>
      <CardContainer>
        <Heading>CREDIT CARD</Heading>
        <CardUrlContainer data-testid="creditCard">
          <CardNumberText>{cardNumber}</CardNumberText>
          <CardHolderName>CARDHOLDER NAME</CardHolderName>
          <Name>{CardHolderNameUpperCase}</Name>
        </CardUrlContainer>
      </CardContainer>
      <InputContainer>
        <InputBox>
          <PaymentMethodText>Payment Method</PaymentMethodText>
          <InputCardNumber
            value={cardNumber}
            type="text"
            placeholder="Card Number"
            onChange={onCardNumber}
          />
          <InputHolderName
            type="text"
            value={holderName}
            placeholder="CardHolder Name"
            onChange={onHolderName}
          />
        </InputBox>
      </InputContainer>
    </MainContainer>
  )
}

export default CreditCard
