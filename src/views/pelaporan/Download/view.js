import React, { useState, useContext } from "react";
import { ExportCSV }  from './Download';
import authService from "../../../services/auth.service";
import {useForm} from 'react-hook-form';
import {Form, Row, Col, Button, Card} from 'react-bootstrap';
import userService from "../../../services/user.service";
import CIcon from '@coreui/icons-react';
import Spinner from '../../Spinner/test';
import { Stuff } from "src/App";

export default function App({ loaded, setLoaded }) {
  const context = useContext(Stuff);
  const [result1, setResult1] = useState();
  const [result2, setResult2] = useState();
  const [result3, setResult3] = useState();
  const [result4, setResult4] = useState();
  const [result5, setResult5] = useState();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = () => {
    userService.getItems('/d_upload_laporan/download', {})
        .then((res)=> {
         if(res.status === 200)
        {
            console.log("Unduhkan...")   
        }
        })
        .catch(err =>{
         if(err.response.status === 401)
         {
             authService.logout();
         }
        })

  }

  return (
    <div>
        <Spinner loaded={loaded}/>
        <div>
             <div className="col-lg-8">
                <div style={{marginBottom: "20px"}} className="page-header-title">
                    <div className="d-inline">
                        <h4>Download Template Laporan</h4>
                        <span>Untuk Mendownload Format Template Laporan</span>
                    </div>
                </div>
            </div>
        <div>
        <Row>
          <Col sm={12}>
          <Card>
          <Card.Header>
            <Row>
              <Col md={5}>
              <Form as="form" onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group as={Row}>
                    <Col sm={4}>
                          <Form.Label style={{fontSize: "12px"}}>Jenis Laporan</Form.Label>
                    </Col>
                    <Col sm={8}>
                      <Form.Control as="select" {...register('jenis', { required: true })} onChange={(e) => setResult1(e.target.value)}>
                                <option value="">Pilih Laporan</option>
                                <option value="00">Laporan APBD</option>
                                <option value="01">Laporan Realisasi Anggaran</option>
                                <option value="02">Laporan LO</option>
                                <option value="03">Laporan NERACA</option>
                                <option value="04">Laporan LAK</option>
                                <option value="05">Laporan LPE</option>
                                <option value="06">Laporan LPSAL</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm={4}>
                          <Form.Label style={{fontSize: "12px"}}>Pemda</Form.Label>
                    </Col>
                      <Col sm={8}>
                          <Form.Control as="select" {...register('pemda')}>
                              <option value={context.user.data[0].id_user}>{context.user.data[0].nm_user}</option>
                          </Form.Control>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                      <Col sm={4}>
                          <Form.Label style={{fontSize: "12px"}}>Tahun</Form.Label>
                      </Col>
                      <Col sm={8}>
                          <Form.Control as="select" {...register('tahun')} onChange={(e) => setResult2(e.target.value)}>
                              <option>Pilih Tahun</option>
                              {context.tahun.map((item) => {
                                  return(
                                      <option key={item.kd_tahun}>{item.kd_tahun}</option>
                                  )
                              })}
                          </Form.Control>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm={4}>
                          <Form.Label style={{fontSize: "12px"}}>Periode</Form.Label>
                    </Col>
                      <Col sm={8}>
                          <Form.Control as="select" {...register('periode')} onChange={(e) => setResult3(e.target.value)}>
                              <option>Pilih Periode</option>
                              {context.periode.map((item) => {
                                  return(
                                      <option key={item.kd_periode}>{item.kd_periode}</option>
                                  )
                              })}
                          </Form.Control>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm={4}>
                          <Form.Label style={{fontSize: "12px"}}>No. Perda</Form.Label>
                    </Col>
                      <Col sm={8}>
                          <Form.Control as="input" type="text" {...register('no_perda')} onChange={(e) => setResult4(e.target.value)}>
                          </Form.Control>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm={4}>
                          <Form.Label style={{fontSize: "12px"}}>Tgl. Perda</Form.Label>
                    </Col>
                      <Col sm={8}>
                          <Form.Control as="input" type="date" {...register('tgl_perda')} onChange={(e) => setResult5(e.target.value)}>
                          </Form.Control>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                      <Col sm={4}>{'  '}</Col>
                      <Col sm={8}>
                      <Button size="sm" variant="success" type="submit" 
                      onClick={
                      () => {
                        ExportCSV(result1, context.user.data[0].kd_pemda, result2, result3, result4, result5, context.user.data[0].nm_user);
                        setLoaded(!loaded);
                      }} 
                      ><CIcon size={'sm'} name="cil-cloud-download"/>{'  '}Download</Button>{'  '}
                      <Button size={'sm'} variant="danger" type="submit" onClick={reset}><CIcon size={'sm'} name="cil-cloud-upload"/>{'  '}Batal</Button>  
                      </Col>
                  </Form.Group> 
              </Form>
              </Col>
              <Col md={7}>
                      <h4 className="m-b-10">
                          Tata Cara Pelaporan
                      </h4>
                      <ol style={{fontSize:"14px"}}>
                          <li>Download file template laporan dengan memilih jenis laporan, pemda, tahun anggaran dan periode laporan. Untuk laporan LRA audited yang ada no. perda dan tanggal perdanya, bisa diisikan. kalau tidak ada dikosongkan.</li>
                          <li>Klik tombol download. sistem akan mendowload file tempalte laporan yang harus diisi oleh pemda.</li>
                          <li>Data yang diisi dari file template usahakan hanya isian data detail laporan. Header laporan usahakan untuk tidak diedit dan nama file jangan direname karena nama file harus sesuai dengan acuan pilihan periode laporan.</li>
                          <li>Setelah file template pelaporan diisi sesuai dengan data yang sebenarnya, lakukan proses download. Data rekening anggaran harus sesuai dengan data rekening acuan sesuai PERMENDAGRI no 64. Master data rekening dapat diunduh <a id="btn_coa" href="http://localhost/#">disini</a>.</li>
                          <li>Setelah data didownload, hasil apload dapat dilihat di tab laporan terkait</li>
                      </ol>
              </Col>
            </Row>
            </Card.Header>
          </Card>
          </Col>
        </Row>
        </div>
        </div>
     </div>
  );
}



