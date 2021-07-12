import React, { useState, useContext } from "react";
import * as XLSX from "xlsx";
import {useForm} from 'react-hook-form';
import {Form, Row, Col, Button, Card} from 'react-bootstrap';
import { simpan_lra } from './simpan_lra';
import { simpan_lo } from './simpan_lo';
import { simpan_neraca } from './simpan_neraca';
import { simpan_lpe } from './simpan_lpe';
import { simpan_lpsal } from './simpan_lpsal';
import CIcon from '@coreui/icons-react';
import Spinner from '../../Spinner/test';
import { Stuff } from "src/App";
import { simpan_apbd } from "./simpan_apbd";

function Upload({ loaded, setLoaded }) {

  const context = useContext(Stuff);
  const [items, setItems] = useState([]);
  const [result, setResult] = useState('');
  const [result4, setResult4] = useState();
  const [result5 , setResult5] = useState();
  const { register, handleSubmit, reset } = useForm();
  const [files, setFiles] = useState("Pilih File Laporan");
  const [pen, setPen] = useState("Pilih File Pendukung");


  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "array" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        resolve(ws);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };
  
  const onSubmit = () => {

    // var sub = files.substr(-7,2);
    // console.log(sub);
    const path = "./pendukung/";
    var pathfile = path.concat(pen);
    var KD_PEMDA = '';
    var KD_TAHUN = '';
    var KD_PERIODE = '';
    var NO_PERDA = result4;
    var TGL_PERDA = result5;
    var KD_AKUN = [];
    var NM_AKUN = [];
    var KD_KELOMPOK= [];
    var NM_KELOMPOK= [];
    var KD_JENIS= [];
    var NM_JENIS= [];
    var KD_OBYEK= [];
    var NM_OBYEK= [];
    var KD_SUB_OBYEK= [];
    var NM_SUB_OBYEK= [];
    var KD_RINCIAN_OBYEK= [];
    var NM_RINCIAN_OBYEK= [];
    var NILAI_ANGGARAN = [];
    var NILAI_REALISASI = [];
    var KD_AKUN_OP = [];
    var NM_AKUN_OP = [];
    var KD_KELOMPOK_OP = [];
    var NM_KELOMPOK_OP = [];
    var KD_JENIS_OP = [];
    var NM_JENIS_OP = [];
    var KD_OBYEK_OP = [];
    var NM_OBYEK_OP = [];
    var KD_SUB_OBYEK_OP= [];
    var NM_SUB_OBYEK_OP= [];
    var KD_RINCIAN_OBYEK_OP = [];
    var NM_RINCIAN_OBYEK_OP = [];
    var JUMLAH_OP = [];
    var KD_AKUN_NOP = [];
    var NM_AKUN_NOP = [];
    var KD_KELOMPOK_NOP = [];
    var NM_KELOMPOK_NOP = [];
    var KD_JENIS_NOP = [];
    var NM_JENIS_NOP = [];
    var KD_OBYEK_NOP = [];
    var NM_OBYEK_NOP = [];
    var KD_SUB_OBYEK_NOP= [];
    var NM_SUB_OBYEK_NOP= [];
    var KD_RINCIAN_OBYEK_NOP = [];
    var NM_RINCIAN_OBYEK_NOP = [];
    var JUMLAH_NOP = [];
    var KD_AKUN_LB = [];
    var NM_AKUN_LB = [];
    var KD_KELOMPOK_LB = [];
    var NM_KELOMPOK_LB = [];
    var KD_JENIS_LB = [];
    var NM_JENIS_LB = [];
    var KD_OBYEK_LB = [];
    var NM_OBYEK_LB = [];
    var KD_SUB_OBYEK_LB = [];
    var NM_SUB_OBYEK_LB = [];
    var KD_RINCIAN_OBYEK_LB = [];
    var NM_RINCIAN_OBYEK_LB = [];
    var KD_URUSAN_ORG1 = [];
    var NM_URUSAN_ORG1 = [];
    var KD_URUSAN_ORG2 = [];
    var NM_URUSAN_ORG2 = [];
    var KD_URUSAN_ORG3 = [];
    var NM_URUSAN_ORG3 = [];
    var KD_ORGANISASI = [];
    var NM_ORGANISASI = [];
    var KD_UR_KEGIATAN = [];
    var NM_UR_KEGIATAN = [];
    var KD_BID_KEGIATAN = [];
    var NM_BID_KEGIATAN = [];
    var KD_PROGRAM = [];
    var NM_PROGRAM = [];
    var KD_KEGIATAN = [];
    var NM_KEGIATAN = [];
    var KD_SUB_KEGIATAN = [];
    var NM_SUB_KEGIATAN = [];
    var JUMLAH_LB = [];
    var JUMLAH = [];
    var EKUITAS_AWAL = '';
    var SURPLUS_DEFISIT_LO = '';
    var R_K_PPKD = '';
    var SELISIH_REVALUASI_ASET = '';
    var LAIN_LAIN = '';
    var SAL_AWAL = '';
    var PENGGUNAAN_SAL = '';
    var SILPA = '';
    var KOREKSI = '';
    var LAINNYA = '';
   
    if (result === "01"){
      simpan_lra(items, KD_PEMDA, KD_TAHUN, KD_PERIODE, NO_PERDA, TGL_PERDA, context.user.data[0].id_user, pathfile, KD_AKUN, NM_AKUN, KD_KELOMPOK, NM_KELOMPOK, KD_JENIS, NM_JENIS, KD_OBYEK, NM_OBYEK, KD_SUB_OBYEK, NM_SUB_OBYEK, KD_RINCIAN_OBYEK, NM_RINCIAN_OBYEK, NILAI_ANGGARAN, NILAI_REALISASI);
    }
     
    else if (result === "02"){
      simpan_lo(items, KD_PEMDA, KD_TAHUN, KD_PERIODE, NO_PERDA, TGL_PERDA, context.user.data[0].id_user, pathfile, KD_AKUN_OP, NM_AKUN_OP, KD_KELOMPOK_OP, NM_KELOMPOK_OP, KD_JENIS_OP, NM_JENIS_OP, KD_OBYEK_OP, NM_OBYEK_OP, KD_SUB_OBYEK_OP, NM_SUB_OBYEK_OP, KD_RINCIAN_OBYEK_OP, NM_RINCIAN_OBYEK_OP, JUMLAH_OP, KD_AKUN_NOP, NM_AKUN_NOP, KD_KELOMPOK_NOP, NM_KELOMPOK_NOP, KD_JENIS_NOP, NM_JENIS_NOP, KD_OBYEK_NOP, NM_OBYEK_NOP, KD_SUB_OBYEK_NOP, NM_SUB_OBYEK_NOP, KD_RINCIAN_OBYEK_NOP, NM_RINCIAN_OBYEK_NOP, JUMLAH_NOP, KD_AKUN_LB, NM_AKUN_LB, KD_KELOMPOK_LB, NM_KELOMPOK_LB, KD_JENIS_LB, NM_JENIS_LB, KD_OBYEK_LB, NM_OBYEK_LB, KD_SUB_OBYEK_LB, NM_SUB_OBYEK_LB, KD_RINCIAN_OBYEK_LB, NM_RINCIAN_OBYEK_LB, JUMLAH_LB);
    }
  
    else if (result === "03"){     
      simpan_neraca(items, KD_PEMDA, KD_TAHUN, KD_PERIODE, NO_PERDA, TGL_PERDA, context.user.data[0].id_user, pathfile, KD_AKUN, NM_AKUN, KD_KELOMPOK, NM_KELOMPOK, KD_JENIS, NM_JENIS, KD_OBYEK, NM_OBYEK, KD_SUB_OBYEK, NM_SUB_OBYEK, KD_RINCIAN_OBYEK, NM_RINCIAN_OBYEK, JUMLAH);
    }
    else if(result === '05'){
      simpan_lpe(items, KD_PEMDA, KD_TAHUN, KD_PERIODE, NO_PERDA, TGL_PERDA, context.user.data[0].id_user, pathfile, EKUITAS_AWAL, SURPLUS_DEFISIT_LO, R_K_PPKD, SELISIH_REVALUASI_ASET, LAIN_LAIN);
    }
    else if(result === '06'){
      simpan_lpsal(KD_PEMDA, KD_TAHUN, KD_PERIODE, NO_PERDA, TGL_PERDA, context.user.data[0].id_user, pathfile, SAL_AWAL, PENGGUNAAN_SAL, SILPA, KOREKSI, LAINNYA);
    }
    else if(result === '00'){
      simpan_apbd(items, KD_PEMDA, KD_TAHUN, KD_PERIODE, NO_PERDA, TGL_PERDA, context.user.data[0].id_user, pathfile, KD_URUSAN_ORG1, NM_URUSAN_ORG1, KD_URUSAN_ORG2 , NM_URUSAN_ORG2, KD_URUSAN_ORG3, NM_URUSAN_ORG3, KD_ORGANISASI, NM_ORGANISASI, KD_UR_KEGIATAN, NM_UR_KEGIATAN, KD_BID_KEGIATAN, NM_BID_KEGIATAN, KD_PROGRAM, NM_PROGRAM, KD_KEGIATAN, NM_KEGIATAN, KD_SUB_KEGIATAN, NM_SUB_KEGIATAN, KD_AKUN, NM_AKUN, KD_KELOMPOK, NM_KELOMPOK, KD_JENIS, NM_JENIS, KD_OBYEK, NM_OBYEK, KD_SUB_OBYEK, NM_SUB_OBYEK, KD_RINCIAN_OBYEK, NM_RINCIAN_OBYEK, NILAI_ANGGARAN, NILAI_REALISASI);
    }
  }  

  return ( 
    <div>
      <Spinner loaded={loaded}/>
      <div>
            <div>
                <div style={{marginBottom: "20px"}} className="page-header-title">
                    <div className="d-inline">
                        <h4>Upload Data</h4>
                        <span>Untuk Upload Lapoaran COA</span>
                    </div>
                </div>
            </div>
      <Row>
        <Col sm={12}>
        <Card >
          <Card.Header>
            <Row>
              <Col md={5}>
              <Form as="form" onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group as={Row}>
                    <Col sm={4}>
                          <Form.Label style={{fontSize: "12px"}}>Jenis Laporan</Form.Label>
                    </Col>
                    <Col sm={8}>
                      <Form.Control size="sm" as="select" {...register('jenis', { required: true })} onChange={(e) => setResult(e.target.value)}>
                                <option>Pilih Laporan</option>
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
                  <Form.Group as={Row} sm>
                    <Col sm={4}>
                          <Form.Label style={{fontSize: "12px"}}>Pemda</Form.Label>
                    </Col>
                      <Col sm={8}>
                          <Form.Control size="sm" as="select">
                              <option value={context.user.data[0].id_user}>{context.user.data[0].nm_user}</option>
                          </Form.Control>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                      <Col sm={4}>
                          <Form.Label style={{fontSize: "12px"}}>Tahun</Form.Label>
                      </Col>
                      <Col sm={8}>
                          <Form.Control size="sm" as="select">
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
                          <Form.Control size="sm" as="select">
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
                          <Form.Control size="sm" as="input" type="text" onChange={(e) => setResult4(e.target.value)}>
                          </Form.Control>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm={4}>
                          <Form.Label style={{fontSize: "12px"}}>Tgl. Perda</Form.Label>
                    </Col>
                      <Col sm={8}>
                          <Form.Control size="sm" as="input" type="date" onChange={(e) => setResult5(e.target.value)}>
                          </Form.Control>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} >
                      <Col sm={4}>
                          <Form.Label style={{fontSize: "12px"}}>File Laporan</Form.Label>
                      </Col>
                      <Col sm={8}>
                            <Form.File
                                style={{fontSize: "12px"}}
                                inputAs = "input"
                                {...register('file')}
                                id="custom-file"
                                label={files}
                                onChange = {(e) =>{
                                  try{
                                    setFiles(e.target.files[0].name);
                                    readExcel(e.target.files[0]);
                                  }
                                  catch(error)
                                  {
                                    console.log(error);
                                    setFiles("Pilih File Laporan");
                                  }
                                }}
                                custom
                            />
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm={4}>
                          <Form.Label style={{fontSize: "12px"}}>File Pendukung</Form.Label>
                      </Col>
                      <Col sm={8}>
                            <Form.File
                                style={{fontSize: "12px"}}
                                inputAs = "input"
                                {...register('pendukung')}
                                id="custom-file"
                                label={pen}
                                onChange = {(e) =>{
                                  try{
                                    setPen(e.target.files[0].name);
                                  }
                                  catch(error)
                                  {
                                    console.log(error);
                                    setFiles("Pilih File Pendukung");
                                  }
                                }}
                                custom
                            />
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                      <Col sm={4}>{'  '}</Col>
                      <Col sm={8}>
                      <Button size="sm" variant="success" type="submit" 
                      onClick={
                      () => {
                        setLoaded(!loaded);
                      }} 
                      ><CIcon size={'sm'} name="cil-arrow-thick-from-bottom"/>{'  '}Upload</Button>{'  '}
                      <Button size={'sm'} variant="danger" type="submit"
                      onClick={() => {
                        reset();
                        setFiles("Pilih File Laporan");
                        setPen("Pilih File Pendukung");
                      }}
                      
                      ><CIcon size={'sm'} name="cil-cloud-upload"/>{'  '}Batal</Button>  
                      </Col>
                  </Form.Group>    
              </Form>
              </Col>
            </Row>
          </Card.Header>
        </Card>
        </Col>
      </Row>
      

      </div>
    </div>
  );
}

export default Upload;
