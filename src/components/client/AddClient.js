import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

function AddClient({ setShowModal,
  newClient = { prenom: "", nom: "", telephone: "", adresse: "", poitrine: 0, epaule: 0, longueurChemise: 0, longueurManche: 0, longueurPantalon: 0, genou: 0, bas: 0, frappe: 0, cou: 0, ceinture: 0, cuisse: 0 }
}) {

  /**
   * Validation du foemulaire
   */
  const [validated, setValidated] = useState(false);

  /**
   * Attribut du client
   */
  const [client, setClient] = useState(newClient);

  /**
   * changement d'un input
   * @param {any} e 
   */
  const onInputChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value })
  }


  /**
   * Sumission du formulaire
   * @param {any} event 
   */
  const handleSubmit = async (event) => {

    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity())
    {
      if (client.id == undefined)
      {
        await axios.post('http://localhost:8000/api/client', client)
          .then((data) => {
            if (data.status === 200)
            {
              setShowModal(false)
            } else
            {
              console.log(data.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else
      {
        await axios.post('http://localhost:8000/api/client/'+client.id, client)
          .then((data) => {
            if (data.status === 200)
            {
              setShowModal(false)
            } else
            {
              console.log(data.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    setValidated(true);


  };


  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" >
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              required
              name='prenom'
              value={client.prenom}
              onChange={(e) => onInputChange(e)}
              type="text"
              placeholder="Prenom"
            />
            <Form.Control.Feedback type="invalid">Le prénom du client est obligatoire</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" >
            <Form.Label>Nom</Form.Label>
            <Form.Control
              required
              name='nom'
              value={client.nom}
              onChange={(e) => onInputChange(e)}
              type="text"
              placeholder="Nom"
            />
            <Form.Control.Feedback type="invalid">Le nom du client est obligatoire</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" >
            <Form.Label>Téléphone</Form.Label>
            <Form.Control
              type="text"
              name='telephone'
              value={client.telephone}
              onChange={(e) => onInputChange(e)}
              placeholder="telephone du client"
              required
            />
            <Form.Control.Feedback type="invalid">
              le numéro de téléphone du client est obligatoire
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" >
            <Form.Label>Adresse</Form.Label>
            <Form.Control
              type="text"
              name='adresse'
              value={client.adresse}
              onChange={(e) => onInputChange(e)}
              placeholder="adresse du client"
              required
            />
            <Form.Control.Feedback type="invalid">
              l'adresse du client est obligatoire
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">

          <Form.Group as={Col} md="3" >
            <Form.Label>Poitrine</Form.Label>
            <Form.Control
              name='poitrine'
              value={client.poitrine}
              onChange={(e) => onInputChange(e)}
              required
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" >
            <Form.Label>Epaule</Form.Label>
            <Form.Control
              required
              name='epaule'
              value={client.epaule}
              onChange={(e) => onInputChange(e)}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" >
            <Form.Label>Longueure Manche</Form.Label>
            <Form.Control
              required
              name='longueurManche'
              value={client.longueurManche}
              onChange={(e) => onInputChange(e)}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" >
            <Form.Label>Longueure Chemise</Form.Label>
            <Form.Control
              required
              name='longueurChemise'
              value={client.longueurChemise}
              onChange={(e) => onInputChange(e)}
              type="number"
            />
          </Form.Group>

        </Row>

        <Row className="mb-3">

          <Form.Group as={Col} md="3" >
            <Form.Label>Longueure Pantalon</Form.Label>
            <Form.Control
              required
              name='longueurPantalon'
              value={client.longueurPantalon}
              onChange={(e) => onInputChange(e)}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" >
            <Form.Label>Cuisse</Form.Label>
            <Form.Control
              required
              name='cuisse'
              value={client.cuisse}
              onChange={(e) => onInputChange(e)}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" >
            <Form.Label>Genou</Form.Label>
            <Form.Control
              required
              name='genou'
              value={client.genou}
              onChange={(e) => onInputChange(e)}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col} md="3" >
            <Form.Label>Bas</Form.Label>
            <Form.Control
              required
              name='bas'
              value={client.bas}
              onChange={(e) => onInputChange(e)}
              type="number"
            />
          </Form.Group>

        </Row>

        <Row className="mb-3">

          <Form.Group as={Col} md="4" >
            <Form.Label>Frappe</Form.Label>
            <Form.Control
              required
              name='frappe'
              value={client.frappe}
              onChange={(e) => onInputChange(e)}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col} md="4" >
            <Form.Label>Cou</Form.Label>
            <Form.Control
              required
              name='cou'
              value={client.cou}
              onChange={(e) => onInputChange(e)}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col} md="4" >
            <Form.Label>Ceinture</Form.Label>
            <Form.Control
              required
              name='ceinture'
              value={client.ceinture}
              onChange={(e) => onInputChange(e)}
              type="number"
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