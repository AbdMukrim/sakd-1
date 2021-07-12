import React, { useContext, useState } from 'react';
import CIcon from '@coreui/icons-react';
import { useForm } from 'react-hook-form'; 
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import userService from '../../../services/user.service';
import authService from '../../../services/auth.service';
import { Stuff } from '../../../App';
import CanvasJSReact from '../../../assets/canvasjs.react';
import Spinner from '../../Spinner/test';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const STAT_RB = ({ loaded, setLoaded }) => {
  
    const [result2, setResult2] = useState();
    const [result3, setResult3] = useState();
    const [items, setItems] = useState([]);
    const [show, setShow] = useState(false);
    const { handleSubmit, register, reset } = useForm();
    const context = useContext(Stuff);;

    const onSubmit = () => {
        console.log('Tampilkan...')
    }

    const handleChange = async () => {
        const data = {
            KD_TAHUN: result2,
            KD_PERIODE: result3
        }
        userService.getItems('/stat_rb/tampil_lap', data)
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
    data: [{
        type: "column",
        name: "ANGGARAN",
        legendText: "ANGGARAN",
        showInLegend: true, 
        dataPoints: items.map(item => {
            
            var dp = {};
            dp.label = item.nm_kelompok;
            dp.y = (item.anggaran === null ? 0 : parseInt(item.anggaran));
            return dp;

        })
    },
    {
        type: "column",	
        name: "REALISASI",
        legendText: "REALISASI",
        showInLegend: true,
        dataPoints: items.map(item => {
            
            var dp = {};
            dp.label = item.nm_kelompok;
            dp.y = (item.realisasi === null ? 0 : parseInt(item.realisasi));
            return dp;
            
        })
    }]
 }
 
  return (
    <>
        <div>
            <Spinner loaded={loaded}/>
                <div className="col-lg-8">
                    <div className="page-header-title" style={{ marginBottom: "20px" }}>
                        <div className="d-inline" >
                            <h4>Statistik Belanja</h4>
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
                        <CanvasJSChart options={options} />	
					</div>
                </Card.Body>
            </Card>
            : null}
            </div>
      </>
  )
}

export default STAT_RB;
