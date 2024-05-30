import { Container, Row, Col, Form, Stack } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types/languages.d'

function App() {
  const { fromLanguage, toLanguage, interchangeLanguages, setToLanguage, setFromLanguage } = useStore()
  return (
    <>
      <Container fluid>
        <h2>Google Translate</h2>
        <Row>
          <Col><h2>From</h2>
            <Stack gap={2}>
              <LanguageSelector
                type={SectionType.From}
                value={fromLanguage}
                onChange={setFromLanguage}
              />
              {/* {fromLanguage} */}
              <Form.Control
                as='textarea'
                placeholder='Introducir texto'
                autoFocus
                style={{ height: '150px' }}
              />
            </Stack>
          </Col>

          <Col>
            <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE}
              onClick={interchangeLanguages}>
              <ArrowsIcon />
            </Button>
          </Col>

          <Col><h2>To</h2>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <Form.Control
              as='textarea'
              placeholder='Traduccion'
              style={{ height: '150px' }}
            />
            {/* {toLanguage} */}
          </Stack>
          </Col>

        </Row>
      </Container>
    </>
  )
}
export default App
