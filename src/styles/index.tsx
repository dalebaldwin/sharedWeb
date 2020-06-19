import styled from 'styled-components'
import { 
  AppWrapperStyleWeb, 
  CustomButtonStyleWeb, 
} from 'shared/dist/theme/themeFunctions'

import { 
  StyledSharedCountText, 
  StyledSharedTextExplainer,
  StyledSharedButton,
  StyledSharedButtonText,
  StyledSharedTextExplainerWrapper 
} from 'shared/dist/theme/sharedThemeFunctions'

export const AppWrapper = styled.div(AppWrapperStyleWeb)

export const CountWrapper = styled.div(StyledSharedCountText)

export const CustomButton = styled.button(StyledSharedButton)

export const TextExplainerWrapper = styled.div(StyledSharedTextExplainerWrapper)

export const TextExplainer = styled.div(StyledSharedTextExplainer)

export const CustomButtonText = styled.span(StyledSharedButtonText)


