import './App.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

function App() {
  const [amount, setAmount] = useState(0); // Stores the initial amount entered by the user
  const [discount, setDiscount] = useState(0); // Stores the discount percentage
  const [finalAmount, setFinalAmount] = useState(0); // Stores the final amount after discount
  const [amountSaved, setAmountSaved] = useState(0); // Stores the amount saved

  const calculateDiscount = () => {
    const saved = (amount * discount) / 100;
    const final = amount - saved;
    setAmountSaved(saved);
    setFinalAmount(final);
  };

  return (
    <div className="background-container">
      <h1 className='title'>Discount Calculator</h1>
      <div className="calculator-container">
        <div className="row d-flex align-items-center">
          
        
          <div className="col-md-6 d-flex flex-column align-items-center left-section">
            <TextField
              id="amount-input"
              label="Amount"
              variant="outlined"
              type="number"
              onChange={(e) => setAmount(Number(e.target.value))}
              style={{ marginBottom: '20px', width: '80%' }}
            />
            <TextField
              id="discount-input"
              label="Discount %"
              variant="outlined"
              type="number"
              onChange={(e) => setDiscount(Number(e.target.value))}
              style={{ marginBottom: '20px', width: '80%' }}
            />
            <button className='btn btn-primary calculate-button' onClick={calculateDiscount}>
              Calculate
            </button>
          </div>
          
        
          <div className="col-md-6 d-flex flex-column align-items-center right-section">
           
            <h4 className="result-text">New Amount: &#8377;{finalAmount.toFixed(2)}</h4>
            <div className="row d-flex justify-content-center">
              <div className="col result-text">Amount Saved: &#8377;{amountSaved.toFixed(2)}</div>
              <div className="col result-text">Actual Price: &#8377;{amount.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
