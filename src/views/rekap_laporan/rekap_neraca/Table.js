import React from 'react';
import {Card, Table} from 'react-bootstrap';

const table = ({items}) => {
    return (
        <div>
            <Card>
                <Card.Header as="div" className="card-block p-t-0">
                    <div className="col-lg-12 col-xl-12">
                                <Table responsive="sm" bordered>
                                        <thead>
                                            <tr>
                                                <th colSpan="3">Kode Rekening</th>
                                                <th>Nama Akun</th>
                                                <th>Jumlah</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {items.length > 0 ? 
                                            items.map((filtered,key) => {
                                                return(
                                                    <tr key={key}>
                                                        <td>{filtered.kd_akun}</td>
                                                        <td>{filtered.kd_kelompok}</td>
                                                        <td>{filtered.kd_jenis}</td>
                                                        <td>{filtered.nm_jenis}</td>
                                                        <td>{filtered.jumlah}</td>
                                                    </tr>    
                                                    )
                                            }) : 
                                            <tr><td colSpan="7">Tidak ada data</td></tr>}                           
                                        </tbody>
                                </Table>
                    </div>
                </Card.Header>
            </Card>
        </div>
    );
};

export default table;