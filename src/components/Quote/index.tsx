import React, { ReactNode } from 'react';
import * as Styled from './style';

type ContentProps = {
    children: React.ReactNode
}

export default function Quote({children}:ContentProps ) {

    return (
        <Styled.Container>
            {children}
        </Styled.Container>
    )
}