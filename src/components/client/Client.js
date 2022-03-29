import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import AddClient from './AddClient';
import ViewClient from './ViewClient'

function Client() {

    var [clients, setClients] = useState([])

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    /**
     * Attribut du client
     */
    const [cli, setCli] = useState({ prenom: "", nom: "", telephone: "", adresse: "", poitrine: 0, epaule: 0, longueurChemise: 0, longueurManche: 0, longueurPantalon: 0, genou: 0, bas: 0, frappe: 0, cou: 0, ceinture: 0, cuisse: 0 });

    useEffect(() => {
        fetchClients()
        const baliseScript = document.createElement("script")
        baliseScript.src = "/assets/js/script.js"
        document.body.appendChild(baliseScript);
        setCli({ prenom: "", nom: "", telephone: "", adresse: "", poitrine: 0, epaule: 0, longueurChemise: 0, longueurManche: 0, longueurPantalon: 0, genou: 0, bas: 0, frappe: 0, cou: 0, ceinture: 0, cuisse: 0 })

    }, [show, show1])

    const fetchClients = async () => {
        await axios.get('http://localhost:8000/api/client').then((data) => {
            setClients(data.data);
        });
    }

    const changeClient = (c) => {
        setCli(c);
        setShow(true)
    }

    const editClient = (c) => {
        setCli(c);
        setShow1(true)
    }

    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    const handleHide1 = () => setShow1(false);



    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header mt-5">
                    <div className="row">
                        <div className="col">
                            <h3 className="page-title">Data Tables</h3> </div>
                    </div>
                </div>
                <Button className='mb-3' onClick={handleShow} variant="primary" >
                    Add Client
                </Button>

                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="datatable table table-stripped table table-hover table-center mb-0">
                                <thead>
                                    <tr>
                                        <th>Prenom</th>
                                        <th>Nom</th>
                                        <th>Téléphone</th>
                                        <th>Adresse</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        clients?.length > 0 && (
                                            clients?.map((value, key) => (

                                                <tr key={key}>
                                                    <td>{value.prenom}</td>
                                                    <td>{value.nom}</td>
                                                    <td>{value.telephone}</td>
                                                    <td>{value.adresse}</td>
                                                    <td>
                                                        <span className='text-primary btn' onClick={() => {
                                                            changeClient(value)
                                                        }}><i className="fas fa-pencil-alt m-r-5"></i></span>
                                                        <span className='text-primary btn' onClick={() => {
                                                            editClient(value)
                                                        }}><i className="fas fa-eye m-r-5"></i></span>
                                                        <span className='text-danger btn'><i className="fas fa-trash-alt m-r-5"></i></span>

                                                    </td>
                                                </tr>
                                            ))
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                <Modal
                    show={show}
                    onHide={handleHide}
                    backdrop="static"
                    keyboard={false}
                    centered
                    size='lg'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Ajout Client</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddClient setShowModal={setShow} newClient={cli} />
                    </Modal.Body>
                </Modal>
                <Modal
                    show={show1}
                    onHide={handleHide1}
                    backdrop="static"
                    keyboard={false}
                    centered
                    size='lg'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Detail Client</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ViewClient newClient={cli} />
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default Client