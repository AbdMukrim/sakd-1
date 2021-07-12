import React, { useContext, useState } from 'react';
import CIcon from '@coreui/icons-react';
import { useForm } from 'react-hook-form'; 
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import userService from '../../../services/user.service';
import authService from '../../../services/auth.service';
import { Stuff } from '../../../App'
import Spinner from '../../Spinner/test';
import CanvasJSReact from '../../../assets/canvasjs.react'

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const STAT_DRA = ({ loaded, setLoaded }) => {
  
    const [result2, setResult2] = useState();
    const [result3, setResult3] = useState();
    const [items, setItems] = useState([]);
    const [show, setShow] = useState(false);
    const { handleSubmit, register, reset } = useForm();
    const context = useContext(Stuff);
 
    const onSubmit = () => {
        console.log('Tampilkan...')
    }

    const handleChange = async () => {
        const data = {
            KD_TAHUN: result2,
            KD_PERIODE: result3
        }
        userService.getItems('/stat_dra/tampil_lap', data)
        .then((res)=> {
         if(res.status === 200)
        {
            if(res.data.tampil)
            {
             setItems(res.data.tampil);
             setShow(true);
            }
            else
            {
             setItems([]);
             setShow(true);
            }
            
        }
        })
        .catch(err =>{
         if(err.response.status === 401)
         {
             authService.logout();
             setShow(false);
         }
        })
    }

    var options = {	
        toolTip: {
            shared: true
        },
        legend: {
            cursor:"pointer"
        },
    data: [
    {
        type: "column",
        name: "REAL_PAD",
        legendText: "PAD",
        showInLegend: true, 
        dataPoints: items.map(item => {
            
            var dp = {};
            dp.label = item.nm_pemda;
            dp.y = (item.real_pad === null ? 0 : parseInt(item.real_pad));
            return dp;

        })
    },
    {
        type: "column",	
        name: "REAL_TRANS",
        legendText: "TRANS",
        showInLegend: true,
        dataPoints: items.map(item => {
            
            var dp = {};
            dp.label = item.pemda;
            dp.y = (item.real_transfer === null ? 0 : parseInt(item.real_transfer));
            return dp;
            
        })
    },
    {
        type: "column",
        name: "REAL_LAIN_PAD",
        legendText: "PAD LAIN-LAINNYA",
        showInLegend: true, 
        dataPoints: items.map(item => {
            
            var dp = {};
            dp.label = item.nm_pemda;
            dp.y = (item.real_lain_pad === null ? 0 : parseInt(item.real_lain_pad));
            return dp;

        })
    },
    {
        type: "column",	
        name: "REAL_BIAYA_MASUK",
        legendText: "BIAYA MASUK",
        showInLegend: true,
        dataPoints: items.map(item => {
            
            var dp = {};
            dp.label = item.nm_pemda;
            dp.y = (item.real_biaya_masuk === null ? 0 : parseInt(item.real_biaya_masuk));
            return dp;
            
        })
    }
]
 }

  return (
    <>
        <div>
            <Spinner loaded={loaded}/>
                <div className="col-lg-8">
                    <div className="page-header-title" style={{ marginBottom: '20px' }}>
                        <div className="d-inline" >
                            <h5>Statistik Pendapatan</h5>
                            <span>Merupakan Grafik Akumulasi Dalam Setahun</span>
                        </div>
                    </div>
                </div>
                <Row>
                <Col sm="12">
                <Card>
                    <Card.Header>
                        <Row>
                            <Col md={6}>
                            <Form as="form" onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group as={Row}>
                                    <Col sm={4}>
                                        <Form.Label style={{fontSize: "12px"}}>Tahun</Form.Label>
                                    </Col>
                                    <Col sm={8}>
                                        <Form.Control size="sm" as="select" {...register('tahun', { required: true })} onChange={(e) => setResult2(e.target.value)}>
                                            <option value="">Pilih Tahun</option>
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
                                        <Form.Control size="sm" as="select" {...register('periode', { required: true })} onChange={(e) => setResult3(e.target.value)}>
                                            <option value="">Pilih Periode</option>
                                            {context.periode.map((item) => {
                                                return(
                                                    <option key={item.kd_periode} value={item.kd_periode}>{item.nm_periode} - {item.kd_periode}</option>
                                                )
                                            })}
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Col sm={4}>{'  '}</Col>
                                    <Col sm={8}>
                                    <Button size="sm" variant="success" type="submit" 
                                    onClick={
                                    () => {
                                        handleChange();
                                        setLoaded(!loaded);
                                    }} 
                                    ><CIcon size={'sm'} name="cil-check-circle"/>{'  '}Tampil</Button>{'  '}
                                    <Button size={'sm'} variant="danger" type="submit" onClick={reset}><CIcon size={'sm'} name="cil-cloud-upload"/>{'  '}Batal</Button>  
                                    </Col>
                                </Form.Group> 
                            </Form>
                            </Col>
                        </Row>
                    </Card.Header>
                </Card>
                </Col>
            </Row>
            {show && loaded? 
            <Card>
                <Card.Body>
                    <div className="col-lg-12 col-xl-12">
                        <CanvasJSChart options={options}/>	
					</div>
                </Card.Body>
            </Card>
            : null}
            </div>
      </>
  )
}

export default STAT_DRA;
