import './App.css';
import { Button, ButtonGroup } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledButton = styled(Button)({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  margin: '2px',
  borderRadius: '0',
  padding: '15px'
})

const doubleSpanStyle = {
  // display: 'inline-grid',
  'grid-column': '1 / span 2',
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup sx={{
          display: 'grid',
          margin: '0',
          padding: '0px',
          gridTemplateRows: 'repeat(5, 1fr)',
          gridTemplateColumns: 'repeat(4, 1fr)',
          alignItems: 'baseline'
        }}>
          <StyledButton sx={doubleSpanStyle}>AC</StyledButton>
          <StyledButton>DEL</StyledButton>
          <StyledButton>*</StyledButton>
          <StyledButton>1</StyledButton>
          <StyledButton>2</StyledButton>
          <StyledButton>3</StyledButton>
          <StyledButton>/</StyledButton>
          <StyledButton>4</StyledButton>
          <StyledButton>5</StyledButton>
          <StyledButton>6</StyledButton>
          <StyledButton>+</StyledButton>
          <StyledButton>7</StyledButton>
          <StyledButton>8</StyledButton>
          <StyledButton>9</StyledButton>
          <StyledButton>-</StyledButton>
          <StyledButton>0</StyledButton>
          <StyledButton>.</StyledButton>
          <StyledButton sx={{
            gridArea: '5 / 3 / 5 / 5'
          }}>=</StyledButton>

        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
