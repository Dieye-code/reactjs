import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import AddClient from './AddClient';
import LogiqueModal from './LogiqueModal';

function Client() {

    var [clients, setClients] = useState([])


    const [a, b] = LogiqueModal();

    useEffect(() => {
        fetchClients()
    }, [])

    const fetchClients = async () => {
        await axios.get('http://localhost:8000/api/client').then((data) => {
            setClients(data.data);
        });

        // const add = 

    }



    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header mt-5">
                    <div className="row">
                        <div className="col">
                            <h3 className="page-title">Data Tables</h3> </div>
                    </div>
                </div>


                <AddClient show={a} hide={b} />

                <Button className='mb-3' onClick={b} variant="primary" >
                    Add Client
                </Button>


                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="datatable table table-stripped">
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
            </div>
        </div>
    )
}

export default Client