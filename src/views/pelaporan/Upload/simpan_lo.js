import UserService from "../../../services/user.service";
import AuthService from "../../../services/auth.service";
import Swal from 'sweetalert2'
import * as XLSX from 'xlsx';

export const simpan_lo = (items, KD_PEMDA, KD_TAHUN, KD_PERIODE, NO_PERDA, TGL_PERDA, USER_ID, PATHFILE, KD_AKUN_OP, NM_AKUN_OP, KD_KELOMPOK_OP, NM_KELOMPOK_OP, KD_JENIS_OP, NM_JENIS_OP, KD_OBYEK_OP, NM_OBYEK_OP, KD_SUB_OBYEK_OP, NM_SUB_OBYEK_OP, KD_RINCIAN_OBYEK_OP, NM_RINCIAN_OBYEK_OP, JUMLAH_OP, KD_AKUN_NOP, NM_AKUN_NOP, KD_KELOMPOK_NOP, NM_KELOMPOK_NOP, KD_JENIS_NOP, NM_JENIS_NOP, KD_OBYEK_NOP, NM_OBYEK_NOP, KD_SUB_OBYEK_NOP, NM_SUB_OBYEK_NOP, KD_RINCIAN_OBYEK_NOP, NM_RINCIAN_OBYEK_NOP, JUMLAH_NOP, KD_AKUN_LB, NM_AKUN_LB, KD_KELOMPOK_LB, NM_KELOMPOK_LB, KD_JENIS_LB, NM_JENIS_LB, KD_OBYEK_LB, NM_OBYEK_LB, KD_SUB_OBYEK_LB, NM_SUB_OBYEK_LB, KD_RINCIAN_OBYEK_LB, NM_RINCIAN_OBYEK_LB, JUMLAH_LB) =>{
    var asd = [];
    var range = XLSX.utils.decode_range(items['!ref']);
    for (let rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
        asd.push(items[XLSX.utils.encode_cell({r: rowNum, c: 0})] ? items[XLSX.utils.encode_cell({r: rowNum, c: 0})].v : '');
    }
    var a = asd.findIndex(asd => asd === "A");
    var b = asd.findIndex(asd => asd === "B");
    var c = asd.findIndex(asd => asd === "C");
   
    try{
      KD_PEMDA = items['C4'].v;
      KD_TAHUN = items['C6'].v;
      KD_PERIODE = items['C7'].v;

      for(var j=a+3; j<b; j++){
        KD_AKUN_OP.push(items[XLSX.utils.encode_cell({r: j, c: 1})] ? items[XLSX.utils.encode_cell({r: j, c: 1})].v : "");
        NM_AKUN_OP.push(items[XLSX.utils.encode_cell({r: j, c: 2})] ? items[XLSX.utils.encode_cell({r: j, c: 2})].v : "");
        KD_KELOMPOK_OP.push(items[XLSX.utils.encode_cell({r: j, c: 3})] ? items[XLSX.utils.encode_cell({r: j, c: 3})].v : "");
        NM_KELOMPOK_OP.push(items[XLSX.utils.encode_cell({r: j, c: 4})] ? items[XLSX.utils.encode_cell({r: j, c: 4})].v : "");
        KD_JENIS_OP.push(items[XLSX.utils.encode_cell({r: j, c: 5})] ? items[XLSX.utils.encode_cell({r: j, c: 5})].v : "");
        NM_JENIS_OP.push(items[XLSX.utils.encode_cell({r: j, c: 6})] ? items[XLSX.utils.encode_cell({r: j, c: 6})].v : "");
        KD_OBYEK_OP.push(items[XLSX.utils.encode_cell({r: j, c: 7})] ? items[XLSX.utils.encode_cell({r: j, c: 7})].v : "");
        NM_OBYEK_OP.push(items[XLSX.utils.encode_cell({r: j, c: 8})] ? items[XLSX.utils.encode_cell({r: j, c: 8})].v : "");
        KD_SUB_OBYEK_OP.push(items[XLSX.utils.encode_cell({r: j, c: 9})] ? items[XLSX.utils.encode_cell({r: j, c: 9})].v : "");
        NM_SUB_OBYEK_OP.push(items[XLSX.utils.encode_cell({r: j, c: 10})] ? items[XLSX.utils.encode_cell({r: j, c: 10})].v : "");
        KD_RINCIAN_OBYEK_OP.push(items[XLSX.utils.encode_cell({r: j, c: 11})] ? items[XLSX.utils.encode_cell({r: j, c: 11})].v : "");
        NM_RINCIAN_OBYEK_OP.push(items[XLSX.utils.encode_cell({r: j, c: 12})] ? items[XLSX.utils.encode_cell({r: j, c: 12})].v : "");
        JUMLAH_OP.push(items[XLSX.utils.encode_cell({r: j, c: 13})] ? items[XLSX.utils.encode_cell({r: j, c: 13})].v : "0");
        }
      
      for(var k=b+3; k<c; k++){
        KD_AKUN_NOP.push(items[XLSX.utils.encode_cell({r: k, c: 1})] ? items[XLSX.utils.encode_cell({r: k, c: 1})].v : "");
        NM_AKUN_NOP.push(items[XLSX.utils.encode_cell({r: k, c: 2})] ? items[XLSX.utils.encode_cell({r: k, c: 2})].v : "");
        KD_KELOMPOK_NOP.push(items[XLSX.utils.encode_cell({r: k, c: 3})] ? items[XLSX.utils.encode_cell({r: k, c: 3})].v : "");
        NM_KELOMPOK_NOP.push(items[XLSX.utils.encode_cell({r: k, c: 4})] ? items[XLSX.utils.encode_cell({r: k, c: 4})].v : "");
        KD_JENIS_NOP.push(items[XLSX.utils.encode_cell({r: k, c: 5})] ? items[XLSX.utils.encode_cell({r: k, c: 5})].v : "");
        NM_JENIS_NOP.push(items[XLSX.utils.encode_cell({r: k, c: 6})] ? items[XLSX.utils.encode_cell({r: k, c: 6})].v : "");
        KD_OBYEK_NOP.push(items[XLSX.utils.encode_cell({r: k, c: 7})] ? items[XLSX.utils.encode_cell({r: k, c: 7})].v : "");
        NM_OBYEK_NOP.push(items[XLSX.utils.encode_cell({r: k, c: 8})] ? items[XLSX.utils.encode_cell({r: k, c: 8})].v : "");
        KD_SUB_OBYEK_NOP.push(items[XLSX.utils.encode_cell({r: k, c: 9})] ? items[XLSX.utils.encode_cell({r: k, c: 9})].v : "");
        NM_SUB_OBYEK_NOP.push(items[XLSX.utils.encode_cell({r: k, c: 10})] ? items[XLSX.utils.encode_cell({r: k, c: 10})].v : "");
        KD_RINCIAN_OBYEK_NOP.push(items[XLSX.utils.encode_cell({r: k, c: 11})] ? items[XLSX.utils.encode_cell({r: k, c: 11})].v : "");
        NM_RINCIAN_OBYEK_NOP.push(items[XLSX.utils.encode_cell({r: k, c: 12})] ? items[XLSX.utils.encode_cell({r: k, c: 12})].v : "");
        JUMLAH_NOP.push(items[XLSX.utils.encode_cell({r: k, c: 13})] ? items[XLSX.utils.encode_cell({r: k, c: 13})].v : "0");
        }

      for(var l=c+3; l<=range.e.r; l++){
        KD_AKUN_LB.push(items[XLSX.utils.encode_cell({r: l, c: 1})] ? items[XLSX.utils.encode_cell({r: l, c: 1})].v : "");
        NM_AKUN_LB.push(items[XLSX.utils.encode_cell({r: l, c: 2})] ? items[XLSX.utils.encode_cell({r: l, c: 2})].v : "");
        KD_KELOMPOK_LB.push(items[XLSX.utils.encode_cell({r: l, c: 3})] ? items[XLSX.utils.encode_cell({r: l, c: 3})].v : "");
        NM_KELOMPOK_LB.push(items[XLSX.utils.encode_cell({r: l, c: 4})] ? items[XLSX.utils.encode_cell({r: l, c: 4})].v : "");
        KD_JENIS_LB.push(items[XLSX.utils.encode_cell({r: l, c: 5})] ? items[XLSX.utils.encode_cell({r: l, c: 5})].v : "");
        NM_JENIS_LB.push(items[XLSX.utils.encode_cell({r: l, c: 6})] ? items[XLSX.utils.encode_cell({r: l, c: 6})].v : "");
        KD_OBYEK_LB.push(items[XLSX.utils.encode_cell({r: l, c: 7})] ? items[XLSX.utils.encode_cell({r: l, c: 7})].v : "");
        NM_OBYEK_LB.push(items[XLSX.utils.encode_cell({r: l, c: 8})] ? items[XLSX.utils.encode_cell({r: l, c: 8})].v : "");
        KD_SUB_OBYEK_LB.push(items[XLSX.utils.encode_cell({r: l, c: 9})] ? items[XLSX.utils.encode_cell({r: l, c: 9})].v : "");
        NM_SUB_OBYEK_LB.push(items[XLSX.utils.encode_cell({r: l, c: 10})] ? items[XLSX.utils.encode_cell({r: l, c: 10})].v : "");
        KD_RINCIAN_OBYEK_LB.push(items[XLSX.utils.encode_cell({r: l, c: 11})] ? items[XLSX.utils.encode_cell({r: l, c: 11})].v : "");
        NM_RINCIAN_OBYEK_LB.push(items[XLSX.utils.encode_cell({r: l, c: 12})] ? items[XLSX.utils.encode_cell({r: l, c: 12})].v : "");
        JUMLAH_LB.push(items[XLSX.utils.encode_cell({r: l, c: 13})] ? items[XLSX.utils.encode_cell({r: l, c: 13})].v : "0");
        }
    }
    catch(TypeError){
      KD_PEMDA = '';
      KD_TAHUN = '';
      KD_PERIODE = '';
      NO_PERDA = '';
      TGL_PERDA = '';
      KD_AKUN_OP = [];
      NM_AKUN_OP = [];
      KD_KELOMPOK_OP = [];
      NM_KELOMPOK_OP = [];
      KD_JENIS_OP = [];
      NM_JENIS_OP = [];
      KD_OBYEK_OP = [];
      NM_OBYEK_OP = [];
      KD_SUB_OBYEK_OP = [];
      NM_SUB_OBYEK_OP = [];
      KD_RINCIAN_OBYEK_OP = [];
      NM_RINCIAN_OBYEK_OP = [];
      JUMLAH_OP = [];
      KD_AKUN_NOP = [];
      NM_AKUN_NOP = [];
      KD_KELOMPOK_NOP = [];
      NM_KELOMPOK_NOP = [];
      KD_JENIS_NOP = [];
      NM_JENIS_NOP = [];
      KD_OBYEK_NOP = [];
      NM_OBYEK_NOP = [];
      KD_SUB_OBYEK_NOP = [];
      NM_SUB_OBYEK_NOP = [];
      KD_RINCIAN_OBYEK_NOP = [];
      NM_RINCIAN_OBYEK_NOP = [];
      JUMLAH_NOP = [];
      KD_AKUN_LB = [];
      NM_AKUN_LB = [];
      KD_KELOMPOK_LB = [];
      NM_KELOMPOK_LB = [];
      KD_JENIS_LB = [];
      NM_JENIS_LB = [];
      KD_OBYEK_LB = [];
      NM_OBYEK_LB = [];
      KD_SUB_OBYEK_LB = [];
      NM_SUB_OBYEK_LB = [];
      KD_RINCIAN_OBYEK_LB = [];
      NM_RINCIAN_OBYEK_LB = [];
      JUMLAH_LB = [];
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
        UserService.simpan_lo(KD_PEMDA, KD_TAHUN, KD_PERIODE, NO_PERDA, TGL_PERDA, USER_ID, PATHFILE, KD_AKUN_OP, NM_AKUN_OP, KD_KELOMPOK_OP, NM_KELOMPOK_OP, KD_JENIS_OP, NM_JENIS_OP, KD_OBYEK_OP, NM_OBYEK_OP, KD_SUB_OBYEK_OP, NM_SUB_OBYEK_OP, KD_RINCIAN_OBYEK_OP, NM_RINCIAN_OBYEK_OP, JUMLAH_OP, KD_AKUN_NOP, NM_AKUN_NOP, KD_KELOMPOK_NOP, NM_KELOMPOK_NOP, KD_JENIS_NOP, NM_JENIS_NOP, KD_OBYEK_NOP, NM_OBYEK_NOP, KD_SUB_OBYEK_NOP, NM_SUB_OBYEK_NOP, KD_RINCIAN_OBYEK_NOP, NM_RINCIAN_OBYEK_NOP, JUMLAH_NOP, KD_AKUN_LB, NM_AKUN_LB, KD_KELOMPOK_LB, NM_KELOMPOK_LB, KD_JENIS_LB, NM_JENIS_LB, KD_OBYEK_LB, NM_OBYEK_LB, KD_SUB_OBYEK_LB, NM_SUB_OBYEK_LB, KD_RINCIAN_OBYEK_LB, NM_RINCIAN_OBYEK_LB, JUMLAH_LB)
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