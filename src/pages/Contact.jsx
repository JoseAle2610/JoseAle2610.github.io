import styled from 'styled-components'
import {PageTemplate} from '@/templates/PageTemplate'
import {Icon} from '@/components/Icon'
import info from '@/config'

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ListGroup = styled.ul`
  list-style: none;
  vertical-align: middle;
  margin-bottom: 15px;
  i {
    margin-right: 10px;
    font-size: 20px;
  }
  li + li {
    margin-top: 10px;
  }
`

export const ListSocial = styled.ul`
  list-style: none;
`

export const Social = styled(({className, icon, link, tooltip, style}) => (
  <a href={link} target='_blank' rel='noreferrer' className={className} style={style}> 
    <i className={`bi bi-${icon}`}></i>
    <span>{tooltip}</span>
  </a>
))`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${(props) => props.transparent ? 'transparent': props.theme.color.dark};
  margin-right: 10px;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  i {
    font-size: 32px;
    display: block;
    text-align: center;
    line-height: 1.5;
    color: #fff;
  }
  span {
    opacity: 0;
    transition: opacity 0.5s ease ;
    position: absolute;
    background-color: white;
    color: ${props => props.theme.color.dark};
    padding: 2px;
    border-radius: 5px;
    vertical-align: middle;
    line-height: 15px;
  }
  &:hover span {
    opacity: 1;
  }
`

export const Contact = () => {
  return (
    <PageTemplate 
      title={info.contact.title}
      description={info.contact.description}>
      <FlexContainer>
      <ListGroup>
        {info.personalData
          .filter(elem => elem.contact !== false)
          .map((elem, index) => (
            <li key={index}><Icon icon={elem.icon} from='b'/>{elem.value}</li>
          ))
        }
      </ListGroup>
        <h2>Redes Sociales</h2>
        <ListSocial>
          {info.social.map((elem, index) => (
            <Social key={index} link={elem.link} icon={elem.icon} />
          ))}
        </ListSocial>
      </FlexContainer>
    </PageTemplate>
  )
}
