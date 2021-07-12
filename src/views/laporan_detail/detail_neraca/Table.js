import React from 'react';
import { Tab, Card, Table, Nav} from 'react-bootstrap';

const table = ({items}) => {
    return (
        <div>
            <Card>
                <Card.Header as="div" className="card-block p-t-0">
                    <div class="col-lg-12 col-xl-12">
                    <Tab.Container defaultActiveKey="first">
                        <Nav as="ul" class="nav nav-tabs md-tabs" role="tablist">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Jenis</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Obyek</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Sub Obyek</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="fourth">Rincian Obyek</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content as="div" className="tab-content card-block card-block-0-plr">
                            <Tab.Pane eventKey="first">
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
                                            items.filter((item) => item.kd_obyek === '').map((filtered,key) => {
                                                return(
                                                    <tr key={key}>
                                                        <td>{filtered.kd_akun}</td>
                                                        <td>{filtered.kd_kelompok}</td>
                                                        <td>{filtered.kd_jenis}</td>
                                                        <td>{filtered.nm_rincian_obyek}</td>
                                                        <td>{filtered.jumlah}</td>
                                                    </tr>    
                                                    )
                                            }) : 
                                            <tr><td colSpan="7">Tidak ada data</td></tr>}                           
                                        </tbody>
                                </Table>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Table responsive="sm" bordered>
                                        <thead>
                                            <tr>
                                                <th colSpan="4">Kode Rekening</th>
                                                <th>Nama Akun</th>
                                                <th>Jumlah</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {items.length > 0 ? 
                                            items.filter((item) => item.kd_rincian_obyek === '').map((filtered,key) => {
                                                return(
                                                    <tr key={key}>
                                                        <td>{filtered.kd_akun}</td>
                                                        <td>{filtered.kd_kelompok}</td>
                                                        <td>{filtered.kd_jenis}</td>
                                                        <td>{filtered.kd_obyek}</td>
                                                        <td>{filtered.nm_rincian_obyek}</td>
                                                        <td>{filtered.jumlah}</td>
                                                    </tr>    
                                                    )
                                            }) : 
                                            <tr><td colSpan="7">Tidak ada data</td></tr>}                                         
                                        </tbody>
                                </Table>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Table responsive="sm" bordered>
                                        <thead>
                                            <tr>
                                                <th colSpan="5">Kode Rekening</th>
                                                <th>Nama Akun</th>
                                                <th>Jumlah</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {items.length > 0 ? 
                                            items.filter((item) => item.kd_rincian_obyek === '').map((filtered,key) => {
                                                return(
                                                    <tr key={key}>
                                                        <td>{filtered.kd_akun}</td>
                                                        <td>{filtered.kd_kelompok}</td>
                                                        <td>{filtered.kd_jenis}</td>
                                                        <td>{filtered.kd_obyek}</td>
                                                        <td>{filtered.kd_sub_obyek}</td>
                                                        <td>{filtered.nm_rincian_obyek}</td>
                                                        <td>{filtered.jumlah}</td>
                                                    </tr>    
                                                    )
                                            }) : 
                                            <tr><td colSpan="7">Tidak ada data</td></tr>}                                         
                                        </tbody>
                                </Table>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <Table responsive="sm" bordered>
                                        <thead>
                                            <tr>
                                                <th colSpan="6">Kode Rekening</th>
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
                                                        <td>{filtered.kd_obyek}</td>
                                                        <td>{filtered.kd_sub_obyek}</td>
                                                        <td>{filtered.kd_rincian_obyek}</td>
                                                        <td>{filtered.nm_rincian_obyek}</td>
                                                        <td>{filtered.jumlah}</td>
                                                    </tr>    
                                                    )
                                            }) : 
                                            <tr><td colSpan="7">Tidak ada data</td></tr>}                       
                                        </tbody>
                                </Table>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </div>
                </Card.Header>
                </Card>
        </div>
    );
};

export default table;