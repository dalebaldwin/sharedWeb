import React from 'react';
import useCounter from 'shared/dist/hooks/useCounter'
import theme from 'shared/dist/theme/baseTheme'
import { ThemeProvider } from 'styled-components'
import { AppWrapper, CountWrapper, CustomButton, TextExplainer, TextExplainerWrapper } from './styles'

const App: React.FC = () => {

  const [count, setCount] = useCounter(0)

  console.log(theme)

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <CountWrapper>{count}</CountWrapper>
        <CustomButton onClick={() => setCount(count+1)}>
          Press me
        </CustomButton>
        <TextExplainerWrapper>
          <TextExplainer>Simple shared hook for a counter using styled components</TextExplainer>
        </TextExplainerWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;