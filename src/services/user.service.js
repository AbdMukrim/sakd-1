import API from '../utils/Api';
import authHeader from './auth-header';

class UserService {

  tampil_detail_lra(pemda, tahun, periode) {
    return API.post('/detail_lra/tampil_lap', 
    {      
        LAPORAN: '',
        KD_PEMDA: pemda,
        KD_TAHUN: tahun,
        KD_PERIODE: periode

    },
    { headers: authHeader() });
  }

  tampil_detail_lo(pemda, tahun, periode) {
    return API.post('/detail_lo/tampil_lap', 
    {      
        LAPORAN: '',
        KD_PEMDA: pemda,
        KD_TAHUN: tahun,
        KD_PERIODE: periode

    },
    { headers: authHeader() });
  }

  tampil_detail_neraca(pemda, tahun, periode) {
    return API.post('/detail_neraca/tampil_lap', 
    {      
        LAPORAN: '',
        KD_PEMDA: pemda,
        KD_TAHUN: tahun,
        KD_PERIODE: periode

    },
    { headers: authHeader() });
  }

  tampil_rekap_lra(tahun, periode) {
    return API.post('/rekap_lra/tampil_lap', 
    {      
        LAPORAN: '',
        KD_TAHUN: tahun,
        KD_PERIODE: periode

    },
    { headers: authHeader() });
  }

  tampil_rekap_lo(tahun, periode) {
    return API.post('/rekap_lo/tampil_lap', 
    {      
        LAPORAN: '',
        KD_TAHUN: tahun,
        KD_PERIODE: periode

    },
    { headers: authHeader() });
  }

  tampil_rekap_neraca(tahun, periode) {
    return API.post('/rekap_neraca/tampil_lap', 
    {      
        LAPORAN: '',
        KD_TAHUN: tahun,
        KD_PERIODE: periode

    },
    { headers: authHeader() });
  }

  tampil_stat_ra(tahun, periode) {
    return API.post('/stat_ra/tampil_lap', 
    {      
        LAPORAN: '',
        KD_TAHUN: tahun,
        KD_PERIODE: periode

    },
    { headers: authHeader() });
  }

  tampil_stat_dra(tahun, periode) {
    return API.post('/stat_dra/tampil_lap', 
    {      
        LAPORAN: '',
        KD_TAHUN: tahun,
        KD_PERIODE: periode

    },
    { headers: authHeader() });
  }

  tampil_stat_rb(tahun, periode) {
    return API.post('/stat_rb/tampil_lap', 
    {      
        LAPORAN: '',
        KD_TAHUN: tahun,
        KD_PERIODE: periode

    },
    { headers: authHeader() });
  }

  tampil_stat_drb(tahun, periode) {
    return API.post('/stat_drb/tampil_lap', 
    {      
        LAPORAN: '',
        KD_TAHUN: tahun,
        KD_PERIODE: periode

    },
    { headers: authHeader() });
  }

  simpan_apbd(KD_PEMDA, KD_TAHUN, KD_APBD, NO_PERDA, TGL_PERDA, ID_USER, PATHFILE, KD_URUSAN_ORG1, NM_URUSAN_ORG1, KD_URUSAN_ORG2 , NM_URUSAN_ORG2,KD_URUSAN_ORG3,NM_URUSAN_ORG3,KD_ORGANISASI,NM_ORGANISASI,KD_UR_KEGIATAN,NM_UR_KEGIATAN,KD_BID_KEGIATAN,NM_BID_KEGIATAN,KD_PROGRAM,NM_PROGRAM,KD_KEGIATAN,NM_KEGIATAN,KD_SUB_KEGIATAN,NM_SUB_KEGIATAN,KD_AKUN, NM_AKUN, KD_KELOMPOK, NM_KELOMPOK, KD_JENIS, NM_JENIS, KD_OBYEK, NM_OBYEK, KD_SUB_OBYEK, NM_SUB_OBYEK, KD_RINCIAN_OBYEK, NM_RINCIAN_OBYEK, NILAI_ANGGARAN, NILAI_ANGGARAN_P) {
    return API.post('/d_upload_laporan/simpan_apbd', 
    {      
      KD_PEMDA: KD_PEMDA,
      KD_TAHUN: KD_TAHUN,
      KD_APBD: KD_APBD,
      NO_PERDA: NO_PERDA,
      TGL_PERDA: TGL_PERDA,
      ID_USER: ID_USER,
      PATHFILE: PATHFILE,
      KD_URUSAN_ORG1: KD_URUSAN_ORG1,
      NM_URUSAN_ORG1: NM_URUSAN_ORG1,
      KD_URUSAN_ORG2: KD_URUSAN_ORG2,
      NM_URUSAN_ORG2: NM_URUSAN_ORG2,
      KD_URUSAN_ORG3: KD_URUSAN_ORG3,
      NM_URUSAN_ORG3: NM_URUSAN_ORG3,
      KD_ORGANISASI: KD_ORGANISASI,
      NM_ORGANISASI: NM_ORGANISASI,
      KD_UR_KEGIATAN: KD_UR_KEGIATAN,
      NM_UR_KEGIATAN: NM_UR_KEGIATAN,
      KD_BID_KEGIATAN: KD_BID_KEGIATAN,
      NM_BID_KEGIATAN: NM_BID_KEGIATAN,
      KD_PROGRAM: KD_PROGRAM,
      NM_PROGRAM: NM_PROGRAM,
      KD_KEGIATAN: KD_KEGIATAN,
      NM_KEGIATAN: NM_KEGIATAN,
      KD_SUB_KEGIATAN: KD_SUB_KEGIATAN,
      NM_SUB_KEGIATAN: NM_SUB_KEGIATAN,
      KD_AKUN: KD_AKUN,
      NM_AKUN: NM_AKUN,
      KD_KELOMPOK: KD_KELOMPOK,
      NM_KELOMPOK: NM_KELOMPOK,
      KD_JENIS: KD_JENIS,
      NM_JENIS: NM_JENIS,
      KD_OBYEK: KD_OBYEK,
      NM_OBYEK: NM_OBYEK,
      KD_SUB_OBYEK: KD_SUB_OBYEK,
      NM_SUB_OBYEK: NM_SUB_OBYEK,
      KD_RINCIAN_OBYEK: KD_RINCIAN_OBYEK,
      NM_RINCIAN_OBYEK: NM_RINCIAN_OBYEK,
      NILAI_ANGGARAN: NILAI_ANGGARAN,
      NILAI_ANGGARAN_P: NILAI_ANGGARAN_P
    },
    { headers: authHeader() });
  }

  simpan_lra(KD_PEMDA, KD_TAHUN, KD_PERIODE, NO_PERDA, TGL_PERDA, ID_USER, PATHFILE, KD_AKUN, NM_AKUN, KD_KELOMPOK, NM_KELOMPOK, KD_JENIS, NM_JENIS, KD_OBYEK, NM_OBYEK, KD_SUB_OBYEK, NM_SUB_OBYEK, KD_RINCIAN_OBYEK, NM_RINCIAN_OBYEK, NILAI_ANGGARAN, NILAI_REALISASI) {
    return API.post('/d_upload_laporan/simpan_lra', 
    {      
      KD_PEMDA: KD_PEMDA,
      KD_TAHUN: KD_TAHUN,
      KD_PERIODE: KD_PERIODE,
      NO_PERDA: NO_PERDA,
      TGL_PERDA: TGL_PERDA,
      ID_USER: ID_USER,
      PATHFILE: PATHFILE,
      KD_AKUN: KD_AKUN,
      NM_AKUN: NM_AKUN,
      KD_KELOMPOK: KD_KELOMPOK,
      NM_KELOMPOK: NM_KELOMPOK,
      KD_JENIS: KD_JENIS,
      NM_JENIS: NM_JENIS,
      KD_OBYEK: KD_OBYEK,
      NM_OBYEK: NM_OBYEK,
      KD_SUB_OBYEK: KD_SUB_OBYEK,
      NM_SUB_OBYEK: NM_SUB_OBYEK,
      KD_RINCIAN_OBYEK: KD_RINCIAN_OBYEK,
      NM_RINCIAN_OBYEK: NM_RINCIAN_OBYEK,
      NILAI_ANGGARAN: NILAI_ANGGARAN,
      NILAI_REALISASI: NILAI_REALISASI
    },
    { headers: authHeader() });
  }

  simpan_lo(KD_PEMDA, KD_TAHUN, KD_PERIODE, NO_PERDA, TGL_PERDA, ID_USER, PATHFILE, KD_AKUN_OP, NM_AKUN_OP, KD_KELOMPOK_OP, NM_KELOMPOK_OP, KD_JENIS_OP, NM_JENIS_OP, KD_OBYEK_OP, NM_OBYEK_OP, KD_SUB_OBYEK_OP, NM_SUB_OBYEK_OP, KD_RINCIAN_OBYEK_OP, NM_RINCIAN_OBYEK_OP, JUMLAH_OP, KD_AKUN_NOP, NM_AKUN_NOP, KD_KELOMPOK_NOP, NM_KELOMPOK_NOP, KD_JENIS_NOP, NM_JENIS_NOP, KD_OBYEK_NOP, NM_OBYEK_NOP, KD_SUB_OBYEK_NOP, NM_SUB_OBYEK_NOP, KD_RINCIAN_OBYEK_NOP, NM_RINCIAN_OBYEK_NOP, JUMLAH_NOP, KD_AKUN_LB, NM_AKUN_LB, KD_KELOMPOK_LB, NM_KELOMPOK_LB, KD_JENIS_LB, NM_JENIS_LB, KD_OBYEK_LB, NM_OBYEK_LB, KD_SUB_OBYEK_LB, NM_SUB_OBYEK_LB, KD_RINCIAN_OBYEK_LB, NM_RINCIAN_OBYEK_LB, JUMLAH_LB) {
    return API.post('/d_upload_laporan/simpan_lo', 
    {      
      KD_PEMDA: KD_PEMDA,
      KD_TAHUN: KD_TAHUN,
      KD_PERIODE: KD_PERIODE,
      NO_PERDA: NO_PERDA,
      TGL_PERDA: TGL_PERDA,
      ID_USER: ID_USER,
      PATHFILE: PATHFILE,
      KD_AKUN_OP: KD_AKUN_OP,
      NM_AKUN_OP: NM_AKUN_OP,
      KD_KELOMPOK_OP: KD_KELOMPOK_OP,
      NM_KELOMPOK_OP: NM_KELOMPOK_OP,
      KD_JENIS_OP: KD_JENIS_OP,
      NM_JENIS_OP: NM_JENIS_OP,
      KD_OBYEK_OP: KD_OBYEK_OP,
      NM_OBYEK_OP: NM_OBYEK_OP,
      KD_SUB_OBYEK_OP: KD_SUB_OBYEK_OP,
      NM_SUB_OBYEK_OP: NM_SUB_OBYEK_OP,
      KD_RINCIAN_OBYEK_OP: KD_RINCIAN_OBYEK_OP,
      NM_RINCIAN_OBYEK_OP: NM_RINCIAN_OBYEK_OP,
      JUMLAH_OP: JUMLAH_OP,
      KD_AKUN_NOP: KD_AKUN_NOP,
      NM_AKUN_NOP: NM_AKUN_NOP,
      KD_KELOMPOK_NOP: KD_KELOMPOK_NOP,
      NM_KELOMPOK_NOP: NM_KELOMPOK_NOP,
      KD_JENIS_NOP: KD_JENIS_NOP,
      NM_JENIS_NOP: NM_JENIS_NOP,
      KD_OBYEK_NOP: KD_OBYEK_NOP,
      NM_OBYEK_NOP: NM_OBYEK_NOP,
      KD_SUB_OBYEK_NOP: KD_SUB_OBYEK_NOP,
      NM_SUB_OBYEK_NOP: NM_SUB_OBYEK_NOP,
      KD_RINCIAN_OBYEK_NOP: KD_RINCIAN_OBYEK_NOP,
      NM_RINCIAN_OBYEK_NOP: NM_RINCIAN_OBYEK_NOP,
      JUMLAH_NOP: JUMLAH_NOP,
      KD_AKUN_LB: KD_AKUN_LB,
      NM_AKUN_LB: NM_AKUN_LB,
      KD_KELOMPOK_LB: KD_KELOMPOK_LB,
      NM_KELOMPOK_LB: NM_KELOMPOK_LB,
      KD_JENIS_LB: KD_JENIS_LB,
      NM_JENIS_LB: NM_JENIS_LB,
      KD_OBYEK_LB: KD_OBYEK_LB,
      NM_OBYEK_LB: NM_OBYEK_LB,
      KD_SUB_OBYEK_LB: KD_SUB_OBYEK_LB,
      NM_SUB_OBYEK_LB: NM_SUB_OBYEK_LB,
      KD_RINCIAN_OBYEK_LB: KD_RINCIAN_OBYEK_LB,
      NM_RINCIAN_OBYEK_LB: NM_RINCIAN_OBYEK_LB,
      JUMLAH_LB: JUMLAH_LB,
    },
    { headers: authHeader() });
  }

  simpan_neraca(KD_PEMDA, KD_TAHUN, KD_PERIODE, NO_PERDA, TGL_PERDA, ID_USER, PATHFILE, KD_AKUN, NM_AKUN, KD_KELOMPOK, NM_KELOMPOK, KD_JENIS, NM_JENIS, KD_OBYEK, NM_OBYEK, KD_SUB_OBYEK, NM_SUB_OBYEK, KD_RINCIAN_OBYEK, NM_RINCIAN_OBYEK, JUMLAH) {
    return API.post('/d_upload_laporan/simpan_neraca', 
    {      
      KD_PEMDA: KD_PEMDA,
      KD_TAHUN: KD_TAHUN,
      KD_PERIODE: KD_PERIODE,
      NO_PERDA: NO_PERDA,
      TGL_PERDA: TGL_PERDA,
      ID_USER: ID_USER,
      PATHFILE: PATHFILE,
      KD_AKUN: KD_AKUN,
      NM_AKUN: NM_AKUN,
      KD_KELOMPOK: KD_KELOMPOK,
      NM_KELOMPOK: NM_KELOMPOK,
      KD_JENIS: KD_JENIS,
      NM_JENIS: NM_JENIS,
      KD_OBYEK: KD_OBYEK,
      NM_OBYEK: NM_OBYEK,
      KD_SUB_OBYEK: KD_SUB_OBYEK,
      NM_SUB_OBYEK: NM_SUB_OBYEK,
      KD_RINCIAN_OBYEK: KD_RINCIAN_OBYEK,
      NM_RINCIAN_OBYEK: NM_RINCIAN_OBYEK,
      JUMLAH: JUMLAH
    },
    { headers: authHeader() });
  }

  simpan_lpe(KD_PEMDA, KD_TAHUN, KD_PERIODE, NO_PERDA, TGL_PERDA, ID_USER, PATHFILE, EKUITAS_AWAL, SURPLUS_DEFISIT_LO, R_K_PPKD, SELISIH_REVALUASI_ASET, LAIN_LAIN) {
    return API.post('/d_upload_laporan/simpan_lpe', 
    {      
      KD_PEMDA: KD_PEMDA,
      KD_TAHUN: KD_TAHUN,
      KD_PERIODE: KD_PERIODE,
      NO_PERDA: NO_PERDA,
      TGL_PERDA: TGL_PERDA,
      ID_USER: ID_USER,
      PATHFILE: PATHFILE,
      EKUITAS_AWAL: EKUITAS_AWAL,
      SURPLUS_DEFISIT_LO: SURPLUS_DEFISIT_LO,
      R_K_PPKD: R_K_PPKD,
      SELISIH_REVALUASI_ASET : SELISIH_REVALUASI_ASET,
      LAIN_LAIN: LAIN_LAIN,
    },
    { headers: authHeader() });
  }

  simpan_lpsal(KD_PEMDA, KD_TAHUN, KD_PERIODE, NO_PERDA, TGL_PERDA, ID_USER, PATHFILE, SAL_AWAL, PENGGUNAAN_SAL, SILPA, KOREKSI, LAINNYA) {
    return API.post('/d_upload_laporan/simpan_lpe', 
    {      
      KD_PEMDA: KD_PEMDA,
      KD_TAHUN: KD_TAHUN,
      KD_PERIODE: KD_PERIODE,
      NO_PERDA: NO_PERDA,
      TGL_PERDA: TGL_PERDA,
      ID_USER: ID_USER,
      PATHFILE: PATHFILE,
      SAL_AWAL: SAL_AWAL,
      PENGGUNAAN_SAL: PENGGUNAAN_SAL,
      SILPA: SILPA,
      KOREKSI : KOREKSI,
      LAINNYA: LAINNYA,
    },
    { headers: authHeader() });
  }

  download() {
    return API.post('/d_upload_laporan/download', 
    {},
    { headers: authHeader() });
  }

  verify() {
    return API.post('/login/verify', 
    {},
    { headers: authHeader() });
  }

  getItems = async (url,data) => {
    
   const response = await API.post(url, data, {headers: authHeader()});
     
   return response;

  }

}

export default new UserService();