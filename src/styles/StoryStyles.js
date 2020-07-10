import styled from 'styled-components'

export const StoryWrapper = styled.section `

    padding-top: 13px;
    margin-bottom: 220px;
    border-top: 1px solid #ccc;

&:first-of-type {
    border-top:0;
}

&:last-of-type {
    margin-bottom: 0;
    padding-bottom: 6;
}
`;

export const StoryTitle = styled.h1`
  margin-bottom: 3px;
  font-size: 38px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;
  a {
    color: #2e2e2c;
    background-color: #E5EC7A;
    text-decoration: none;
  }
`;

export const StoryMeta = styled.div`
  font-style: italic;

  > span:first-child {
    margin-right: 25px;
  }

  > span:not(:first-child):before {
    content: '•'
    margin: 0 7px;
  }
 
`;

export const StoryMetaElement = styled.span`
  font-weight: bold;
  color: ${props => props.color};
`;