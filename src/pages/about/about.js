import React from 'react';

import { Container } from './about.styles';

const About = () => (
  <Container  exit={{ opacity: 0 }}>
    <h2>About</h2>
    <p>This Web App was developed by a freelance developer</p>
    <p>If you run a small business that requires a static website or similar online solution</p>

    <h3>Contact</h3>
    <p><strong>Email</strong> - lylediego87@icloud.com</p>
    <p><strong>Whatsapp</strong> - 079 309 7768</p>
  </Container>
)

export default About;