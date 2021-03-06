import React from 'react'
import { Button } from '../Button'
import { ColumnLeft, ColumnRight, Container, Section } from './infoSectionElements'

const InfoSection = ({heading,  paragraphTwo, paragraphOne, buttonLabel, reverse, image}) => {
    return (
         <Section>
             <Container>
                 <ColumnLeft>
                 <h1>{heading}</h1>
                 <p>{paragraphOne}</p>
                 <p>{paragraphTwo}</p>
                 <Button to="/homes" primary="true">{buttonLabel} </Button>
                 </ColumnLeft>
                 <ColumnRight reverse={reverse}>
                 <img src={image} alt="home"/>
                 </ColumnRight>
             </Container>
         </Section>
    )
}

export default InfoSection
