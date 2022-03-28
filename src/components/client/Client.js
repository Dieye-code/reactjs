import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import AddClient from './AddClient';

function Client() {

    var [clients, setClients] = useState([])

    const [show, setShow] = useState(false);

    useEffect(() => {
        fetchClients()
    }, [show])

    const fetchClients = async () => {
        await axios.get('http://localhost:8000/api/client').then((data) => {
            setClients(data.data);
        });
    }

    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);



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
                        <AddClient setShowModal={setShow} />
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default Client