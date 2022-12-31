import * as Styled from './style';
import imgReload from '../../assets/reload.svg';

export function Header({onClick}:any) {

    return (
        <Styled.Container>
            <div
            onClick={onClick}
            > random <img src={imgReload} alt='icone de reload da página' /></div>
        </Styled.Container>
    )
}