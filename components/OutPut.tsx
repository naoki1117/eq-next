import React from 'react'
import ExcelJS from "exceljs"
import { useQueryEqs } from '../hooks/useQueryEqs';

export const OutPut = () => {
    const {data: eqs, status} =useQueryEqs()
    const handlerClickDownloadButton = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        format: "xlsx" | "csv"
      ) => {
        e.preventDefault();
        const workbook = new ExcelJS.Workbook();
        workbook.addWorksheet("sheet1");
        const worksheet = workbook.getWorksheet("sheet1");
        console.log(eqs)
        worksheet.columns = [
          { header: "ID", key: "id" },
          { header: "作成日時", key: "createdAt" },
          { header: "名前", key: "name" }
        ];
        
        
        worksheet.addRows([
            eqs
        ]);
    
        const uint8Array =
          format === "xlsx"
            ? await workbook.xlsx.writeBuffer() //xlsxの場合
            : await workbook.csv.writeBuffer(); //csvの場合
        const blob = new Blob([uint8Array], { type: "application/octet-binary" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "sampleData." + format; //フォーマットによってファイル拡張子を変えている
        a.click();
        a.remove();
      }
  return (
    <div>
        <button onClick={(e) => handlerClickDownloadButton(e, "xlsx")}>
          Excelダウンロード
        </button>
    </div>
  )
}

