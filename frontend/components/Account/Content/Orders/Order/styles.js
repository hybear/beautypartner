
import styled from 'styled-components'
import { Text } from '../../../../General/styles'

export const OrderStyles = styled.li`
    margin: 15px;
    .items{
        img{
            width: 100px;   
        }
    }
`
export const OrderInfoContainer = styled.div`
    display: grid;
    grid-template: 
    "id method date" auto
    "status count date" auto
    / auto auto auto;
    grid-gap: 5px;
    margin-bottom: 20px;
`
export const OrderInfo = styled(Text)`
    display: flex;
    flex-flow: column;
    grid-area: ${({area}) => area};
    .title{
        font-size: .875em;
        font-family: "QuadraSans-Bold";
    }

    justify-self: ${({area}) => area == "date" && "end"};
    text-align: ${({area}) => area == "date" && "end"};
    .year{
        &__wareki{
            font-size: 1.5em;
            position: relative;
            z-index: 1;
            &:before{
                content: '';
                display: block;
                width: 1em;
                height: 1em;
                background: ${({theme}) => theme.red};
                position: absolute;
                border-radius: 1.25em;
                right: 10px;
                z-index: -1;
                opacity: .3;
            }
        }
        &__resume{
            font-size: ${({area}) => area == "date" && "1.1em"};
        }
    }
`