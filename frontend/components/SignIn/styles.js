import styled, { withProps } from '../../styles/themed-components';

export const StyledP = styled.p`
  ${props => props.theme.media.tablet`
    color: black;
    font-size: 5rem;
  `}
  color: ${props => props.theme.color.blue};
  font-size: 10rem;
    div {
        p {
        }
    }
`;

interface ISample {
  visible: string;
}

export const SampleWithProps = withProps<ISample, HTMLSpanElement>(styled.span)`
    visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  `;
