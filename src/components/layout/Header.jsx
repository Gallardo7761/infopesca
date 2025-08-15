import { Navbar, Container } from 'react-bootstrap';
import ThemeButton from '@/components/ThemeButton';

const Header = () => {
    return (
    <Navbar expand="lg" className="shadow-sm" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#" className="fw-bold">
                    🎣 Infopesca
                </Navbar.Brand>
                <div className="ms-auto d-flex align-items-center gap-2">
                    <ThemeButton onlyIcon className="btn btn-sm btn-outline-light" />
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;