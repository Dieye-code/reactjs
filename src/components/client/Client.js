import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { listClientServices } from '../../services/ClientServices';

function Client() {

    var [clients, setClients] = useState([])

    useEffect(() => {
        fetchClients()
    }, [])

    const fetchClients = async () => {
        await axios.get('http://localhost:8000/api/client').then((data) => {
            setClients(data.data);
        });
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