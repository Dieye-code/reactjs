import React, { useState, useEffect } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

function AddClient() {

  const [validated, setValidated] = useState(false);


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity())
    {
      console.log(form);
    }

    event.preventDefault();
    event.stopPropagation();

    setValidated(true);
  };


  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationPrenom">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Prenom"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">Le prénom du client est obligatoire</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationNom">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nom"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">Le nom du client est obligatoire</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationTelephone">
            <Form.Label>Téléphone</Form.Label>
            <Form.Control
              type="text"
              placeholder="telephone du client"
              required
            />
            <Form.Control.Feedback type="invalid">
              le numéro de téléphone du client est obligatoire
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationAdresse">
            <Form.Label>Adresse</Form.Label>
            <Form.Control
              type="text"
              placeholder="adresse du client"
              required
            />
            <Form.Control.Feedback type="invalid">
              l'adresse du client est obligatoire
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">

          <Form.Group as={Col} md="3" controlId="validationPoitrine">
            <Form.Label>Poitrine</Form.Label>
            <Form.Control
              required
              type="number"
              defaultValue="0"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationEpaule">
            <Form.Label>Epaule</Form.Label>
            <Form.Control
              required
              type="number"
              defaultValue="0"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationLongueurManche">
            <Form.Label>Longueure Manche</Form.Label>
            <Form.Control
              required
              type="number"
              defaultValue="0"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationLongueureChemise">
            <Form.Label>Longueure Chemise</Form.Label>
            <Form.Control
              required
              type="number"
              defaultValue="0"
            />
          </Form.Group>

        </Row>

        <Row className="mb-3">

          <Form.Group as={Col} md="3" controlId="validationLongueurePantalon">
            <Form.Label>Longueure Pantalon</Form.Label>
            <Form.Control
              required
              type="number"
              defaultValue="0"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCuisse">
            <Form.Label>Cuisse</Form.Label>
            <Form.Control
              required
              type="number"
              defaultValue="0"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationGenou">
            <Form.Label>Genou</Form.Label>
            <Form.Control
              required
              type="number"
              defaultValue="0"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationBas">
            <Form.Label>Bas</Form.Label>
            <Form.Control
              required
              type="number"
              defaultValue="0"
            />
          </Form.Group>

        </Row>

        <Row className="mb-3">

          <Form.Group as={Col} md="4" controlId="validationFrappe">
            <Form.Label>Frappe</Form.Label>
            <Form.Control
              required
              type="number"
              defaultValue="0"
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCou">
            <Form.Label>Cou</Form.Label>
            <Form.Control
              required
              type="number"
              defaultValue="0"
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCeinture">
            <Form.Label>Ceinture</Form.Label>
            <Form.Control
              required
              type="number"
              defaultValue="0"
            />
          </Form.Group>

        </Row>

        <Button type="submit">Enregistrer</Button>
        {/* <Button className="btn btn-danger ml-4" type="reset" >Annuler</Button> */}
      </Form>
    </>
  )
}

export default AddClient