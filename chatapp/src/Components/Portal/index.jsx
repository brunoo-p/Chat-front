import React from 'react';
import { Container } from './styles';

export default function Portal({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}
