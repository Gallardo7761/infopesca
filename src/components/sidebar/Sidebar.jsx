import { Accordion, Badge, Card, ListGroup, Stack } from 'react-bootstrap';
import { motion as Motion } from 'framer-motion';

const StatItem = ({ label, value, unit, variant = 'secondary' }) => (
  <Stack direction="horizontal" className="justify-content-between">
    <span className="text-muted">{label}</span>
    <Badge bg={variant}>{value}{unit ? ` ${unit}` : ''}</Badge>
  </Stack>
);

const PlaceholderChart = () => (
  <div className="placeholder-wave rounded" style={{ height: 80, background: 'var(--bs-secondary-bg-subtle)' }} />
);

const Sidebar = () => {
  return (
  <Motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="mb-3">Condiciones actuales</Card.Title>
          <ListGroup variant="flush" className="mb-3">
            <ListGroup.Item><StatItem label="Temperatura" value={24} unit="°C" variant="primary" /></ListGroup.Item>
            <ListGroup.Item><StatItem label="Viento" value={12} unit="km/h" variant="info" /></ListGroup.Item>
            <ListGroup.Item><StatItem label="Racha" value={18} unit="km/h" variant="warning" /></ListGroup.Item>
            <ListGroup.Item><StatItem label="Humedad" value={65} unit="%" variant="success" /></ListGroup.Item>
            <ListGroup.Item><StatItem label="Oleaje" value={0.8} unit="m" variant="secondary" /></ListGroup.Item>
          </ListGroup>

          <Accordion alwaysOpen>
            <Accordion.Item eventKey="mareas">
              <Accordion.Header>Mareas</Accordion.Header>
              <Accordion.Body>
                <PlaceholderChart />
                <small className="text-muted">Gráfico placeholder de mareas (pondrás tus datos aquí).</small>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="viento">
              <Accordion.Header>Viento</Accordion.Header>
              <Accordion.Body>
                <PlaceholderChart />
                <small className="text-muted">Rosa de vientos o serie temporal.</small>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="clima">
              <Accordion.Header>Pronóstico</Accordion.Header>
              <Accordion.Body>
                <PlaceholderChart />
                <small className="text-muted">Pronóstico 24-72h.</small>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
  </Motion.div>
  );
};

export default Sidebar;
