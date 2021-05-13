import styled from 'styled-components'

const borderColor = '#EFEFEF';
const defaultPadding = '30px';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: min-content auto min-content;
  grid-template-areas:
  'header header'
  'users content'
  'users sender';
  position: relative;
  height: 100%;
  width: 100%;

  @media(max-width: 800px) {
    grid-template-columns: auto auto;
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid ${borderColor};
  grid-area: header;
  padding: ${defaultPadding};
`

export const Sidebar = styled.div`
  border-right: 1px solid ${borderColor};
  grid-area: users;
  padding: ${defaultPadding};
`

export const Content = styled.div`
  grid-area: content;
  padding: ${defaultPadding};
  position: relative;
  height: 100%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #EEE;
    border: 1px solid #FFF;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #FFF;
  }
`
export const Sender = styled.div`
  grid-area: sender;
  padding: 0 ${defaultPadding} ${defaultPadding} ${defaultPadding};
`
