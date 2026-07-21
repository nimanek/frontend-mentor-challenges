import { useState } from 'react'
import './App.css'
import CardsDetails from './components/CardsDetails'
import FormInputs from './components/FormInputs'

function App() {
    const [cardNumber, setCardNumber] = useState<string>("");
    const [cardHolderName, setCardHolderName] = useState<string>('');
    const [cvcNumber, setCvcNumber] = useState<string>('');
    const [monthNumber, setMonthNumber] = useState<number>();
    const [yearNumber, setYearNumber] = useState<number>();



  return (
    <>
      <div className=''>
        <CardsDetails cardHolderName={cardHolderName} cardNumber={cardNumber} cvcNumber={cvcNumber} monthNumber={monthNumber} yearNumber={yearNumber}/>

        <FormInputs cardNumber={cardNumber} setCardNumber={setCardNumber} setCardHolderName={setCardHolderName} cardHolderName={cardHolderName} setCvcNumber={setCvcNumber} cvcNumber={cvcNumber} monthNumber={monthNumber} setMonthNumber={setMonthNumber} yearNumber={yearNumber} setYearNumber={setYearNumber}/>
      </div>
    </>
  )
}

export default App
