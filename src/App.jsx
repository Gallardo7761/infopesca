import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'leaflet/dist/leaflet.css'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import FishingMap from '@/components/map/FishingMap'
import Sidebar from '@/components/sidebar/Sidebar'

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 py-3">
        <Container fluid>
          <Row className="g-3">
            <Col xs={12} lg={4} xl={3}>
              <Sidebar />
            </Col>
            <Col xs={12} lg={8} xl={9}>
              <div className="map-wrapper rounded-3 overflow-hidden shadow-sm">
                <FishingMap />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
