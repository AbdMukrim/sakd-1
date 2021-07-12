import * as FileSaver from 'file-saver';
import ExcelJS from 'exceljs';


export const ExportCSV =  async (laporan, pemda, tahun, periode, nomor, tgl, nama) => {
    
  var fileName = '';
    try{
      fileName = tahun.concat(periode,laporan);
    }
    catch(error){
      if(tahun === null && periode === null){
        fileName = ''.concat('',laporan);
      }
      else if(periode === null){
        fileName = tahun.concat('',laporan)
      }
      else if(laporan === ''){
        fileName = tahun.concat(tahun,'');
      }
      else if(tahun === null){
        fileName = ''.concat(periode,laporan);
      }
    }

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

    const fileExtension = '.xlsx';

        const wb = new ExcelJS.Workbook();
        const ws = wb.addWorksheet('Sheet1');

        wb.modified = new Date();

        if(laporan === "00")
        {

        ws.getCell('B4').value = 'KODE PEMDA:';
        ws.getCell('B5').value = 'NAMA PEMDA:';
        ws.getCell('B6').value = 'TAHUN:';
        ws.getCell('B7').value = 'JENIS APBD:';
        ws.getCell('B8').value = 'TGL. PERDA:';
        ws.getCell('B9').value = 'NO. PERDA:';
        ws.getCell('B2').value = 'LAPORAN APBD';
        ws.mergeCells('B2:AE2');
        ws.getCell('B2').alignment={ horizontal: 'center' };

        ws.getCell('C4').value = pemda;
        ws.getCell('C5').value = nama;
        ws.getCell('C6').value = tahun;
        ws.getCell('C7').value = '';
        ws.getCell('C8').value = tgl;
        ws.getCell('C9').value = nomor;

        ws.getCell('B12').value = 'KD_URUSAN_ORG1';
        ws.getCell('C12').value = 'NM_URUSAN_ORG1';
        ws.getCell('D12').value = 'KD_URUSAN_ORG2';
        ws.getCell('E12').value = 'NM_URUSAN_ORG2';
        ws.getCell('F12').value = 'KD_URUSAN_ORG3';
        ws.getCell('G12').value = 'NM_URUSAN_ORG3';
        ws.getCell('H12').value = 'KD_ORGANISASI';
        ws.getCell('I12').value = 'NM_ORGANISASI'; 
        ws.getCell('J12').value = 'KD_UR_KEGIATAN';
        ws.getCell('K12').value = 'NM_UR_KEGIATAN';
        ws.getCell('L12').value = 'KD_BID_KEGIATAN';
        ws.getCell('M12').value = 'NM_BID_KEGIATAN';
        ws.getCell('N12').value = 'KD_PROGRAM';
        ws.getCell('O12').value = 'NM_PROGRAM'; 
        ws.getCell('P12').value = 'KD_KEGIATAN';
        ws.getCell('Q12').value = 'NM_KEGIATAN'; 
        ws.getCell('R12').value = 'KD_SUB_KEGIATAN';
        ws.getCell('S12').value = 'NM_SUB_KEGIATAN'; 
        ws.getCell('T12').value = 'KD_AKUN';
        ws.getCell('U12').value = 'NM_AKUN';
        ws.getCell('V12').value = 'KD_KELOMPOK';
        ws.getCell('W12').value = 'NM_KELOMPOK';
        ws.getCell('X12').value = 'KD_JENIS';
        ws.getCell('Y12').value = 'NM_JENIS';
        ws.getCell('Z12').value = 'KD_OBYEK';
        ws.getCell('AA12').value = 'NM_OBYEK';
        ws.getCell('AB12').value = 'KD_SUB_OBYEK';
        ws.getCell('AC12').value = 'NM_SUB_OBYEK';
        ws.getCell('AD12').value = 'KD_RINCIAN_OBYEK';
        ws.getCell('AE12').value = 'NM_RINCIAN_OBYEK';
        ws.getCell('AF12').value = 'NILAI_ANGGARAN';
        ws.getCell('AG12').value = 'NILAI_ANGGARAN_P';

        ws.addConditionalFormatting({
          ref: 'B2:AG2',
          rules: [
            {
              type: 'expression',
              formulae: ['MOD(ROW()+COLUMN(),2)=0'],
              style: {fill: {type: 'pattern', pattern: 'solid', bgColor: {argb: 'c4ffe1'}}},
            }
          ]
        }) 

        ws.getCell('B12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('C12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('D12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('E12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('F12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('G12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('H12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('I12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('J12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('K12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('L12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('M12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('N12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('O12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('P12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('Q12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('R12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('S12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('T12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('U12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('V12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('W12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('X12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('Y12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('Z12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('AA12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('AB12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('AC12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('AD12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('AE12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('AF12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
        ws.getCell('AG12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};

        ws.getCell('B12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('C12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('D12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('E12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('F12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('G12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('H12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('I12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('J12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('K12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('L12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('M12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('N12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('O12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('P12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('Q12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('R12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('S12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('T12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('U12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('V12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('W12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('X12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('Y12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('Z12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('AA12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('AB12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('AC12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('AD12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('AE12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('AF12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        ws.getCell('AG12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};

        const buffer = await wb.xlsx.writeBuffer();
        console.log(buffer);

        const data = new Blob([buffer], {type: fileType});

        FileSaver.saveAs(data, fileName + fileExtension);
    }

        else if(laporan === "01")
        {
          ws.getCell('B4').value = 'KODE PEMDA:';
          ws.getCell('B5').value = 'NAMA PEMDA:';
          ws.getCell('B6').value = 'TAHUN:';
          ws.getCell('B7').value = 'PERIODE:';
          ws.getCell('B8').value = 'TGL. PERDA:';
          ws.getCell('B9').value = 'NO. PERDA:';
  
          ws.getCell('B2').value = 'LAPORAN REALISASI ANGGARAN';
          ws.mergeCells('B2:O2');
          ws.getCell('B2').alignment={ horizontal: 'center' };
  
          ws.getCell('C4').value = pemda;
          ws.getCell('C5').value = nama;
          ws.getCell('C6').value = tahun;
          ws.getCell('C7').value = periode;
          ws.getCell('C8').value = tgl;
          ws.getCell('C9').value = nomor;
  
           ws.getCell('B12').value = 'KD_AKUN';
           ws.getCell('C12').value = 'NM_AKUN';
           ws.getCell('D12').value = 'KD_KELOMPOK';
           ws.getCell('E12').value = 'NM_KELOMPOK';
           ws.getCell('F12').value = 'KD_JENIS';
           ws.getCell('G12').value = 'NM_JENIS';
           ws.getCell('H12').value = 'KD_OBYEK';
           ws.getCell('I12').value = 'NM_OBYEK';
           ws.getCell('J12').value = 'KD_SUB_OBYEK';
           ws.getCell('K12').value = 'NM_SUB_OBYEK';
           ws.getCell('L12').value = 'KD_RINCIAN_OBYEK';
           ws.getCell('M12').value = 'NM_RINCIAN_OBYEK';
           ws.getCell('N12').value = 'NILAI_ANGGARAN';
           ws.getCell('O12').value = 'NILAI_REALISASI';
  
           ws.addConditionalFormatting({
              ref: 'B2:M2',
              rules: [
                {
                  type: 'expression',
                  formulae: ['MOD(ROW()+COLUMN(),2)=0'],
                  style: {fill: {type: 'pattern', pattern: 'solid', bgColor: {argb: 'c4ffe1'}}},
                }
              ]
            }) 
          
            ws.getCell('B12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
            ws.getCell('C12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
            ws.getCell('D12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
            ws.getCell('E12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
            ws.getCell('F12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
            ws.getCell('G12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
            ws.getCell('H12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
            ws.getCell('I12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
            ws.getCell('J12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
            ws.getCell('K12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
            ws.getCell('L12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
            ws.getCell('M12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
            ws.getCell('N12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
            ws.getCell('O12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};

            ws.getCell('B12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
            ws.getCell('C12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
            ws.getCell('D12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
            ws.getCell('E12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
            ws.getCell('F12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
            ws.getCell('G12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
            ws.getCell('H12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
            ws.getCell('I12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
            ws.getCell('J12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
            ws.getCell('K12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
            ws.getCell('L12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
            ws.getCell('M12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
            ws.getCell('N12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
            ws.getCell('O12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
  
          const buffer = await wb.xlsx.writeBuffer();
          console.log(buffer);
  
          const data = new Blob([buffer], {type: fileType});
  
          FileSaver.saveAs(data, fileName + fileExtension);
    }

    else if(laporan === "02")
    {

        ws.getCell('B4').value = 'KODE PEMDA:';
        ws.getCell('B5').value = 'NAMA PEMDA:';
        ws.getCell('B6').value = 'TAHUN:';
        ws.getCell('B7').value = 'PERIODE:';
        ws.getCell('B2').value = 'LAPORAN LO';
        ws.mergeCells('B2:N2');
        ws.getCell('B2').alignment={horizontal: 'center' };

        ws.getCell('C4').value = pemda;
        ws.getCell('C5').value = nama;
        ws.getCell('C6').value = tahun;
        ws.getCell('C7').value = periode;

        ws.getCell('A11').value = 'A';
        ws.getCell('B11').value = 'KEGIATAN OPERASIONAL';

         ws.getCell('B12').value = 'KD_AKUN';
         ws.getCell('C12').value = 'NM_AKUN';
         ws.getCell('D12').value = 'KD_KELOMPOK';
         ws.getCell('E12').value = 'NM_KELOMPOK';
         ws.getCell('F12').value = 'KD_JENIS';
         ws.getCell('G12').value = 'NM_JENIS';
         ws.getCell('H12').value = 'KD_OBYEK';
         ws.getCell('I12').value = 'NM_OBYEK';
         ws.getCell('J12').value = 'KD_SUB_OBYEK';
         ws.getCell('K12').value = 'NM_SUB_OBYEK';
         ws.getCell('L12').value = 'KD_RINCIAN_OBYEK';
         ws.getCell('M12').value = 'NM_RINCIAN_OBYEK';
         ws.getCell('N12').value = 'NILAI_ANGGARAN';

         ws.getCell('A18').value = 'B';
         ws.getCell('B18').value = 'KEGIATAN NON OPERASIONAL';

         ws.getCell('B19').value = 'KD_AKUN';
         ws.getCell('C19').value = 'NM_AKUN';
         ws.getCell('D19').value = 'KD_KELOMPOK';
         ws.getCell('E19').value = 'NM_KELOMPOK';
         ws.getCell('F19').value = 'KD_JENIS';
         ws.getCell('G19').value = 'NM_JENIS';
         ws.getCell('H19').value = 'KD_OBYEK';
         ws.getCell('I19').value = 'NM_OBYEK';
         ws.getCell('J19').value = 'KD_SUB_OBYEK';
         ws.getCell('K19').value = 'NM_SUB_OBYEK';
         ws.getCell('L19').value = 'KD_RINCIAN_OBYEK';
         ws.getCell('M19').value = 'NM_RINCIAN_OBYEK';
         ws.getCell('N19').value = 'NILAI_ANGGARAN';

         ws.getCell('A24').value = 'C';
         ws.getCell('B24').value = 'KEGIATAN LUAR BIASA';

         ws.getCell('B25').value = 'KD_AKUN';
         ws.getCell('C25').value = 'NM_AKUN';
         ws.getCell('D25').value = 'KD_KELOMPOK';
         ws.getCell('E25').value = 'NM_KELOMPOK';
         ws.getCell('F25').value = 'KD_JENIS';
         ws.getCell('G25').value = 'NM_JENIS';
         ws.getCell('H25').value = 'KD_OBYEK';
         ws.getCell('I25').value = 'NM_OBYEK';
         ws.getCell('J25').value = 'KD_SUB_OBYEK';
         ws.getCell('K25').value = 'NM_SUB_OBYEK';
         ws.getCell('L25').value = 'KD_RINCIAN_OBYEK';
         ws.getCell('M25').value = 'NM_RINCIAN_OBYEK';
         ws.getCell('N25').value = 'NILAI_ANGGARAN';

         ws.addConditionalFormatting({
          ref: 'B2:N2',
          rules: [
            {
              type: 'expression',
              formulae: ['MOD(ROW()+COLUMN(),2)=0'],
              style: {fill: {type: 'pattern', pattern: 'solid', bgColor: {argb: 'c4ffe1'}}},
            }
          ]
        }) 

         ws.getCell('B12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('C12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('D12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('E12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('F12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('G12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('H12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('I12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('J12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('K12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('L12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('M12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('N12').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};

         ws.getCell('B12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('C12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('D12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('E12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('F12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('G12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('H12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('I12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('J12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('K12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('L12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('M12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('N12').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};

         ws.getCell('B19').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('C19').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('D19').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('E19').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('F19').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('G19').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('H19').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('I19').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('J19').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('K19').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('L19').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('M19').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('N19').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};

         ws.getCell('B19').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('C19').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('D19').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('E19').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('F19').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('G19').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('H19').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('I19').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('J19').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('K19').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('L19').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('M19').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('N19').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};

         ws.getCell('B25').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('C25').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('D25').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('E25').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('F25').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('G25').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('H25').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('I25').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('J25').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('K25').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('L25').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('M25').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};
         ws.getCell('N25').fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'feffb2'}, bgColor: {argb: 'feffb2'}};

         ws.getCell('B25').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('C25').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('D25').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('E25').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('F25').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('G25').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('H25').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('I25').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('J25').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('K25').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('L25').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('M25').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
         ws.getCell('N25').border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
        
        const buffer = await wb.xlsx.writeBuffer();
        console.log(buffer);

        const data = new Blob([buffer], {type: fileType});

        FileSaver.saveAs(data, fileName + fileExtension);
    }

    else if(laporan === "03")
    {

        ws.getCell('B4').value = 'KODE PEMDA:';
        ws.getCell('B5').value = 'NAMA PEMDA:';
        ws.getCell('B6').value = 'TAHUN:';
        ws.getCell('B7').value = 'PERIODE:';
        ws.getCell('B2').value = 'LAPORAN NERACA';
        ws.mergeCells('B2:N2');
        ws.getCell('B2').alignment={horizontal: 'center' };

        ws.getCell('C4').value = pemda;
        ws.getCell('C5').value = nama;
        ws.getCell('C6').value = tahun;
        ws.getCell('C7').value = periode;

        ws.addConditionalFormatting({
          ref: 'B2:N2',
          rules: [
            {
              type: 'expression',
              formulae: ['MOD(ROW()+COLUMN(),2)=0'],
              style: {fill: {type: 'pattern', pattern: 'solid', bgColor: {argb: 'c4ffe1'}}},
            }
          ]
        })

         ws.getCell('B12').value = 'KD_AKUN';
         ws.getCell('C12').value = 'NM_AKUN';
         ws.getCell('D12').value = 'KD_KELOMPOK';
         ws.getCell('E12').value = 'NM_KELOMPOK';
         ws.getCell('F12').value = 'KD_JENIS';
         ws.getCell('G12').value = 'NM_JENIS';
         ws.getCell('H12').value = 'KD_OBYEK';
         ws.getCell('I12').value = 'NM_OBYEK';
         ws.getCell('J12').value = 'KD_SUB_OBYEK';
         ws.getCell('K12').value = 'NM_SUB_OBYEK';
         ws.getCell('L12').value = 'KD_RINCIAN_OBYEK';
         ws.getCell('M12').value = 'NM_RINCIAN_OBYEK';
         ws.getCell('N12').value = 'JUMLAH';
        
        const buffer = await wb.xlsx.writeBuffer();
        console.log(buffer);

        const data = new Blob([buffer], {type: fileType});

        FileSaver.saveAs(data, fileName + fileExtension);
    }

    else if(laporan === "05")
    {
        ws.getCell('B4').value = 'KODE PEMDA:';
        ws.getCell('B5').value = 'NAMA PEMDA:';
        ws.getCell('B6').value = 'TAHUN:';
        ws.getCell('B7').value = 'PERIODE:';
        ws.getCell('B8').value = 'TGL_PERDA:';
        ws.getCell('B9').value = 'NO_PERDA:';
        ws.getCell('B2').value = 'LAPORAN LPE';
        ws.mergeCells('B2:C2');
        ws.getCell('B2').alignment={horizontal: 'center' };

        ws.getCell('C4').value = pemda;
        ws.getCell('C5').value = nama;
        ws.getCell('C6').value = tahun;
        ws.getCell('C7').value = periode;
        ws.getCell('C8').value = tgl;
        ws.getCell('C9').value = nomor;

        ws.getCell('B11').value = 'URAIAN';
        ws.getCell('C11').value = 'JUMLAH';
        ws.getCell('B12').value = 'EKUITA_AWAL';
        ws.getCell('B13').value = 'SURPLUS_DEFISIT_LO';
        ws.getCell('B14').value = 'R_K_PPKD';
        ws.getCell('B15').value = 'SELISIH_REVALUASI_ASET';
        ws.getCell('B16').value = 'LAIN_LAIN';
        
        const buffer = await wb.xlsx.writeBuffer();
        console.log(buffer);

        const data = new Blob([buffer], {type: fileType});

        FileSaver.saveAs(data, fileName + fileExtension);
    }

    else if(laporan === "06")
    {
        ws.getCell('B4').value = 'KODE PEMDA:';
        ws.getCell('B5').value = 'NAMA PEMDA:';
        ws.getCell('B6').value = 'TAHUN:';
        ws.getCell('B7').value = 'PERIODE:';
        ws.getCell('B8').value = 'TGL_PERDA:';
        ws.getCell('B9').value = 'NO_PERDA:';
        ws.getCell('B2').value = 'LAPORAN LPSAL';
        ws.mergeCells('B2:C2');
        ws.getCell('B2').alignment={horizontal: 'center' };

        ws.getCell('C4').value = pemda;
        ws.getCell('C5').value = nama;
        ws.getCell('C6').value = tahun;
        ws.getCell('C7').value = periode;
        ws.getCell('C8').value = tgl;
        ws.getCell('C9').value = nomor;

         ws.getCell('B11').value = 'URAIAN';
         ws.getCell('C11').value = 'JUMLAH';
         ws.getCell('B12').value = 'SAL_AWAL';
         ws.getCell('B13').value = 'PENGGUNAAN_SAL';
         ws.getCell('B14').value = 'SILPA';
         ws.getCell('B15').value = 'KOREKSI';
         ws.getCell('B16').value = 'LAINNYA';
        
        const buffer = await wb.xlsx.writeBuffer();
        console.log(buffer);

        const data = new Blob([buffer], {type: fileType});

        FileSaver.saveAs(data, fileName + fileExtension);
    }
  
}