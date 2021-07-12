import UserService from "../../../services/user.service";
import AuthService from "../../../services/auth.service";
import Swal from 'sweetalert2';

export const simpan_lpe = ( items, KD_PEMDA, KD_TAHUN, KD_PERIODE, NO_PERDA, TGL_PERDA, USER_ID, PATHFILE, EKUITAS_AWAL, SURPLUS_DEFISIT_LO, R_K_PPKD, SELISIH_REVALUASI_ASET, LAIN_LAIN) => {

      try{
        KD_PEMDA = items[1].__EMPTY_2;
        KD_TAHUN = items[3].__EMPTY_2;
        KD_PERIODE = items[4].__EMPTY_2;

        EKUITAS_AWAL = items[9].__EMPTY_2;
        SURPLUS_DEFISIT_LO = items[10].__EMPTY_2;
        R_K_PPKD = items[11].__EMPTY_2;
        SELISIH_REVALUASI_ASET = items[12].__EMPTY_2;
        LAIN_LAIN = items[13].__EMPTY_2;
      }
      catch(TypeError){
        KD_PEMDA = '';
        KD_TAHUN = '';
        KD_PERIODE = '';

        EKUITAS_AWAL = '';
        SURPLUS_DEFISIT_LO = '';
        R_K_PPKD = '';
        SELISIH_REVALUASI_ASET = '';
        LAIN_LAIN = '';
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
          UserService.simpan_lpe(KD_PEMDA, KD_TAHUN, KD_PERIODE, NO_PERDA, TGL_PERDA, USER_ID, PATHFILE, EKUITAS_AWAL, SURPLUS_DEFISIT_LO, R_K_PPKD, SELISIH_REVALUASI_ASET, LAIN_LAIN)
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