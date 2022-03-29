import axios from 'axios';
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

function AddClient({
  newClient }) {
  /**
   * Attribut du client
   */
  const [client, setClient] = useState(newClient);



  return (
    <>
      <Row className="mb-3 row">
        <div className='text-primary col-6'><u>Prénom : </u></div>
        <div className='col-6'><b>{client.prenom}</b></div>
      </Row>
      <Row className="mb-3 row">
        <div className='text-primary col-6'><u>Nom : </u></div>
        <div className='col-6'><b>{client.nom}</b></div>
      </Row>
      <Row className="mb-3 row">
        <div className='text-primary col-6'><u>Téléphone : </u></div>
        <div className='col-6'><b>{client.telephone}</b></div>
      </Row>
      <Row className="mb-3 row">
        <div className='text-primary col-6'><u>Adresse : </u></div>
        <div className='col-6'><b>{client.adresse}</b></div>
      </Row>
      <Row className="mb-3 row">
        <div className='text-primary col-6'><u>Poitrine : </u></div>
        <div className='col-6'><b>{client.poitrine}</b></div>
      </Row>
      <Row className="mb-3 row">
        <div className='text-primary col-6'><u>Epaule : </u></div>
        <div className='col-6'><b>{client.epaule} cm</b></div>
      </Row>
      <Row className="mb-3 row">
        <div className='text-primary col-6'><u>Longueur Manche : </u></div>
        <div className='col-6'><b>{client.longueurManche} cm</b></div>
      </Row>
      <Row className="mb-3 row">
        <div className='text-primary col-6'><u>Longueur Chemise : </u></div>
        <div className='col-6'><b>{client.longueurChemise} cm</b></div>
      </Row>
      <Row className="mb-3 row">
        <div className='text-primary col-6'><u>Longueur Pantalon : </u></div>
        <div className='col-6'><b>{client.longueurPantalon} cm</b></div>
      </Row>
      <Row className="mb-3 row">
        <div className='text-primary col-6'><u>Cuisse: </u></div>
        <div className='col-6'><b>{client.cuisse} cm</b></div>
      </Row>
      <Row className="mb-3 row">
        <div className='text-primary col-6'><u>Genou : </u></div>
        <div className='col-6'><b>{client.genou} cm</b></div>
      </Row>
      <Row className="mb-3 row">
        <div className='text-primary col-6'><u>Bas : </u></div>
        <div className='col-6'><b>{client.bas} cm</b></div>
      </Row>
      <Row className="mb-3 row">
        <div className='text-primary col-6'><u>Frappe : </u></div>
        <div className='col-6'><b>{client.frappe} cm</b></div>
      </Row>
      <Row className="mb-3 row">
        <div className='text-primary col-6'><u>Cou : </u></div>
        <div className='col-6'><b>{client.cou} cm</b></div>
      </Row>
      <Row className="mb-3 row">
        <div className='text-primary col-6'><u>Ceinture : </u></div>
        <div className='col-6'><b>{client.ceinture} cm</b></div>
      </Row>
    </>
  )
}

export default AddClient