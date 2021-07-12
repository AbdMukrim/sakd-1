import UserService from "../../../services/user.service";
import AuthService from "../../../services/auth.service";
import Swal from 'sweetalert2';
import * as XLSX from "xlsx";

export const simpan_apbd = async ( items, KD_PEMDA, KD_TAHUN, KD_APBD, NO_PERDA, TGL_PERDA, USER_ID, PATHFILE, KD_URUSAN_ORG1, NM_URUSAN_ORG1, KD_URUSAN_ORG2 , NM_URUSAN_ORG2,KD_URUSAN_ORG3,NM_URUSAN_ORG3,KD_ORGANISASI,NM_ORGANISASI,KD_UR_KEGIATAN,NM_UR_KEGIATAN,KD_BID_KEGIATAN,NM_BID_KEGIATAN,KD_PROGRAM,NM_PROGRAM,KD_KEGIATAN,NM_KEGIATAN,KD_SUB_KEGIATAN,NM_SUB_KEGIATAN,KD_AKUN, NM_AKUN, KD_KELOMPOK, NM_KELOMPOK, KD_JENIS, NM_JENIS, KD_OBYEK, NM_OBYEK, KD_SUB_OBYEK, NM_SUB_OBYEK, KD_RINCIAN_OBYEK, NM_RINCIAN_OBYEK, NILAI_ANGGARAN, NILAI_ANGGARAN_P) =>{
      try{
        KD_PEMDA = items['C4'].v;
        KD_TAHUN = items['C6'].v;
        KD_APBD = items['C7'].v;
        TGL_PERDA = items['C8'].v;
        NO_PERDA = items['C9'].v;

        var range = XLSX.utils.decode_range(items['!ref']);
        for(var rowNum=12; rowNum<= range.e.r; rowNum++){
          KD_URUSAN_ORG1.push(items[XLSX.utils.encode_cell({r: rowNum, c: 1})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 1})].v : "");
          NM_URUSAN_ORG1.push(items[XLSX.utils.encode_cell({r: rowNum, c: 2})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 2})].v : "");
          KD_URUSAN_ORG2.push(items[XLSX.utils.encode_cell({r: rowNum, c: 3})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 3})].v : "");
          NM_URUSAN_ORG2.push(items[XLSX.utils.encode_cell({r: rowNum, c: 4})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 4})].v : "");
          KD_URUSAN_ORG3.push(items[XLSX.utils.encode_cell({r: rowNum, c: 5})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 5})].v : "");
          NM_URUSAN_ORG3.push(items[XLSX.utils.encode_cell({r: rowNum, c: 6})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 6})].v : "");
          KD_ORGANISASI.push(items[XLSX.utils.encode_cell({r: rowNum, c: 7})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 7})].v : "");
          NM_ORGANISASI.push(items[XLSX.utils.encode_cell({r: rowNum, c: 8})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 8})].v : "");
          KD_UR_KEGIATAN.push(items[XLSX.utils.encode_cell({r: rowNum, c: 9})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 9})].v : "");
          NM_UR_KEGIATAN.push(items[XLSX.utils.encode_cell({r: rowNum, c: 10})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 10})].v : "");
          KD_BID_KEGIATAN.push(items[XLSX.utils.encode_cell({r: rowNum, c: 11})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 11})].v : "");
          NM_BID_KEGIATAN.push(items[XLSX.utils.encode_cell({r: rowNum, c: 12})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 12})].v : "");
          KD_PROGRAM.push(items[XLSX.utils.encode_cell({r: rowNum, c: 13})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 13})].v : "");
          NM_PROGRAM.push(items[XLSX.utils.encode_cell({r: rowNum, c: 14})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 14})].v : "");
          KD_KEGIATAN.push(items[XLSX.utils.encode_cell({r: rowNum, c: 15})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 15})].v : "");
          NM_KEGIATAN.push(items[XLSX.utils.encode_cell({r: rowNum, c: 16})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 16})].v : "");
          KD_SUB_KEGIATAN.push(items[XLSX.utils.encode_cell({r: rowNum, c: 17})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 17})].v : "");
          NM_SUB_KEGIATAN.push(items[XLSX.utils.encode_cell({r: rowNum, c: 18})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 18})].v : "");
          KD_AKUN.push(items[XLSX.utils.encode_cell({r: rowNum, c: 19})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 19})].v : "");
          NM_AKUN.push(items[XLSX.utils.encode_cell({r: rowNum, c: 20})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 20})].v : "");
          KD_KELOMPOK.push(items[XLSX.utils.encode_cell({r: rowNum, c: 21})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 21})].v : "");
          NM_KELOMPOK.push(items[XLSX.utils.encode_cell({r: rowNum, c: 22})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 22})].v : "");
          KD_JENIS.push(items[XLSX.utils.encode_cell({r: rowNum, c: 23})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 23})].v : "");
          NM_JENIS.push(items[XLSX.utils.encode_cell({r: rowNum, c: 24})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 24})].v : "");
          KD_OBYEK.push(items[XLSX.utils.encode_cell({r: rowNum, c: 25})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 25})].v : "");
          NM_OBYEK.push(items[XLSX.utils.encode_cell({r: rowNum, c: 26})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 26})].v : "");
          KD_SUB_OBYEK.push(items[XLSX.utils.encode_cell({r: rowNum, c: 27})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 27})].v : "");
          NM_SUB_OBYEK.push(items[XLSX.utils.encode_cell({r: rowNum, c: 28})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 28})].v : "");
          KD_RINCIAN_OBYEK.push(items[XLSX.utils.encode_cell({r: rowNum, c: 29})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 29})].v : "");
          NM_RINCIAN_OBYEK.push(items[XLSX.utils.encode_cell({r: rowNum, c: 30})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 30})].v : "");
          NILAI_ANGGARAN.push(items[XLSX.utils.encode_cell({r: rowNum, c: 31})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 31})].v : "0");
          NILAI_ANGGARAN_P.push(items[XLSX.utils.encode_cell({r: rowNum, c: 32})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 32})].v : "0");
          }
      }
      catch(TypeError){
        KD_PEMDA = '';
        KD_TAHUN = '';
        KD_APBD = '';
        NO_PERDA = '';
        TGL_PERDA = '';
        KD_URUSAN_ORG1 = [];
        NM_URUSAN_ORG1 = [];
        KD_URUSAN_ORG2 = [];
        NM_URUSAN_ORG2 = [];
        KD_URUSAN_ORG3 = [];
        NM_URUSAN_ORG3 = [];
        KD_ORGANISASI = [];
        NM_ORGANISASI = [];
        KD_UR_KEGIATAN = [];
        NM_UR_KEGIATAN = [];
        KD_BID_KEGIATAN = [];
        NM_BID_KEGIATAN = [];
        KD_PROGRAM = [];
        NM_PROGRAM = [];
        KD_KEGIATAN = [];
        NM_KEGIATAN = [];
        KD_SUB_KEGIATAN = [];
        NM_SUB_KEGIATAN = [];
        KD_AKUN = [];
        NM_AKUN = [];
        KD_KELOMPOK= [];
        NM_KELOMPOK= [];
        KD_JENIS= [];
        NM_JENIS= [];
        KD_OBYEK= [];
        NM_OBYEK= [];
        KD_SUB_OBYEK= [];
        NM_SUB_OBYEK= [];
        KD_RINCIAN_OBYEK= [];
        NM_RINCIAN_OBYEK= [];
        NILAI_ANGGARAN = [];
        NILAI_ANGGARAN_P = [];
      }
      
      Swal.fire({
        title: 'Apakah anda yakin?',
        text: 'Anda akan upload file ke database anda',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak'
      }).then((result) => {
        if (result.isConfirmed) {
          UserService.simpan_apbd(KD_PEMDA, KD_TAHUN, KD_APBD, NO_PERDA, TGL_PERDA, USER_ID, PATHFILE, KD_URUSAN_ORG1, NM_URUSAN_ORG1, KD_URUSAN_ORG2 , NM_URUSAN_ORG2,KD_URUSAN_ORG3,NM_URUSAN_ORG3,KD_ORGANISASI,NM_ORGANISASI,KD_UR_KEGIATAN,NM_UR_KEGIATAN,KD_BID_KEGIATAN,NM_BID_KEGIATAN,KD_PROGRAM,NM_PROGRAM,KD_KEGIATAN,NM_KEGIATAN,KD_SUB_KEGIATAN,NM_SUB_KEGIATAN, KD_AKUN, NM_AKUN, KD_KELOMPOK, NM_KELOMPOK, KD_JENIS, NM_JENIS, KD_OBYEK, NM_OBYEK, KD_SUB_OBYEK, NM_SUB_OBYEK, KD_RINCIAN_OBYEK, NM_RINCIAN_OBYEK, NILAI_ANGGARAN, NILAI_ANGGARAN_P)
          .then(res =>{
            if(res.status=== 200)
            {
              Swal.fire(
                'Sukses!',
                'File uploaded.',
                'success'
              )
              return res;
            }
          }) 
          .catch(error =>{
            if(error.response.status === 401)
            {
              AuthService.logout();
            }
            else{
              Swal.fire(
                'Gagal',
                'File anda gagal di upload',
                'error'
              )
            }
          })
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Gagal',
            'File anda gagal di upload',
            'error'
          )
        }
      })
      
}