import './App.css';
import { Button, ButtonGroup, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledButton = styled(Button)({
  color: 'darkslategray',
  background: 'rgba(255, 255, 255, 0.7)',
  margin: '2px',
  borderRadius: '0',
  padding: '15px'
})

const StyledInput = styled(Box)({
  display: 'block',
  width: '500px',
  height: '75px',
  background: 'rgba(255, 255, 255, 0.8)'
})

const doubleSpanStyle = {
  'grid-column': '1 / span 2',
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='calc'>
          <StyledInput sx={{
            display: 'block',
            width: 'auto',
          }} />
          <ButtonGroup sx={{
            display: 'grid',
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
        </div>
      </header>
    </div>
  );
}

export default App;
