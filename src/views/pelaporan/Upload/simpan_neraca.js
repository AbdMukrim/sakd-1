import UserService from "../../../services/user.service";
import AuthService from "../../../services/auth.service";
import Swal from 'sweetalert2'
import * as XLSX from "xlsx";


export const simpan_neraca = (items, KD_PEMDA, KD_TAHUN, KD_PERIODE, NO_PERDA, TGL_PERDA, USER_ID, PATHFILE, KD_AKUN, NM_AKUN, KD_KELOMPOK, NM_KELOMPOK, KD_JENIS, NM_JENIS, KD_OBYEK, NM_OBYEK, KD_SUB_OBYEK, NM_SUB_OBYEK, KD_RINCIAN_OBYEK, NM_RINCIAN_OBYEK, JUMLAH) => {
    try{
        KD_PEMDA = items['C4'].v;
        KD_TAHUN = items['C6'].v;
        KD_PERIODE = items['C7'].v;
        
        var range = XLSX.utils.decode_range(items['!ref']);
        for(var n=12; n<= range.e.r; n++){
          KD_AKUN.push(items[XLSX.utils.encode_cell({r: n, c: 1})] ? items[XLSX.utils.encode_cell({r: n, c: 1})].v : "");
          NM_AKUN.push(items[XLSX.utils.encode_cell({r: n, c: 2})] ? items[XLSX.utils.encode_cell({r: n, c: 2})].v : "");
          KD_KELOMPOK.push(items[XLSX.utils.encode_cell({r: n, c: 3})] ? items[XLSX.utils.encode_cell({r: n, c: 3})].v : "");
          NM_KELOMPOK.push(items[XLSX.utils.encode_cell({r: n, c: 4})] ? items[XLSX.utils.encode_cell({r: n, c: 4})].v : "");
          KD_JENIS.push(items[XLSX.utils.encode_cell({r: n, c: 5})] ? items[XLSX.utils.encode_cell({r: n, c: 5})].v : "");
          NM_JENIS.push(items[XLSX.utils.encode_cell({r: n, c: 6})] ? items[XLSX.utils.encode_cell({r: n, c: 6})].v : "");
          KD_OBYEK.push(items[XLSX.utils.encode_cell({r: n, c: 7})] ? items[XLSX.utils.encode_cell({r: n, c: 7})].v : "");
          NM_OBYEK.push(items[XLSX.utils.encode_cell({r: n, c: 8})] ? items[XLSX.utils.encode_cell({r: n, c: 8})].v : "");
          KD_SUB_OBYEK.push(items[XLSX.utils.encode_cell({r: n, c: 9})] ? items[XLSX.utils.encode_cell({r: n, c: 9})].v : "");
          NM_SUB_OBYEK.push(items[XLSX.utils.encode_cell({r: n, c: 10})] ? items[XLSX.utils.encode_cell({r: n, c: 10})].v : "");
          KD_RINCIAN_OBYEK.push(items[XLSX.utils.encode_cell({r: n, c: 11})] ? items[XLSX.utils.encode_cell({r: n, c: 11})].v : "");
          NM_RINCIAN_OBYEK.push(items[XLSX.utils.encode_cell({r: n, c: 12})] ? items[XLSX.utils.encode_cell({r: n, c: 12})].v : "");
          JUMLAH.push(items[XLSX.utils.encode_cell({r: n, c: 13})] ? items[XLSX.utils.encode_cell({r: n, c: 13})].v : "0");
          }
      }
      catch(TypeError){
        KD_PEMDA = '';
        KD_TAHUN = '';
        KD_PERIODE = '';
        NO_PERDA = '';
        TGL_PERDA = '';
        KD_AKUN = [];
        NM_AKUN = [];
        KD_KELOMPOK = [];
        NM_KELOMPOK = [];
        KD_JENIS = [];
        NM_JENIS = [];
        KD_OBYEK = [];
        NM_OBYEK = [];
        KD_SUB_OBYEK = [];
        NM_SUB_OBYEK = [];
        KD_RINCIAN_OBYEK = [];
        NM_RINCIAN_OBYEK = [];
        JUMLAH = [];
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
          UserService.simpan_neraca(KD_PEMDA, KD_TAHUN, KD_PERIODE, NO_PERDA, TGL_PERDA, USER_ID, PATHFILE, KD_AKUN, NM_AKUN, KD_KELOMPOK, NM_KELOMPOK, KD_JENIS, NM_JENIS, KD_OBYEK, NM_OBYEK, KD_SUB_OBYEK, NM_SUB_OBYEK, KD_RINCIAN_OBYEK, NM_RINCIAN_OBYEK, JUMLAH)
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