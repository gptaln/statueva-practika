import styled from '@emotion/styled'
import {TextField} from '@material-ui/core'

export const InputsWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 15px;
`

export const TextFieldStyled = styled(TextField)`
    width: 100%;
    .MuiInput-input {
      margin: 0 !important;
    }
`