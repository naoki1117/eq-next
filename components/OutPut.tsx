import React from 'react'
import ExcelJS from "exceljs"
import { useQueryEqs } from '../hooks/useQueryEqs';
import { FileExport } from 'tabler-icons-react';
import { Button } from '@mantine/core';

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
          { header: "登録ID", key: "id" },
          { header: "名称", key: "name" },
          { header: "所在地(フロア)", key: "category" },
          { header: "数量", key: "quantity" },
          { header: "単位", key: "description" },
          { header: "作成日時", key: "createdAt" },
          { header: "最新更新日時", key: "updatedAt" },
          { header: "登録ユーザーId", key: "userId" },

        ];
        
        
        
        eqs?.map((eq) => {
            worksheet.addRows([
                {
                    id:eq.id,
                    name:eq.name,
                    category:eq.category,
                    quantity:eq.quantity,
                    description:eq.description,
                    createdAt:eq.createdAt,
                    updatedAt:eq.updatedAt,
                    userId:eq.userId
                }

            ]);
            
        })
    
        const uint8Array =
          format === "xlsx"
            ? await workbook.xlsx.writeBuffer() //xlsxの場合
            : await workbook.csv.writeBuffer(); //csvの場合
        const blob = new Blob([uint8Array], { type: "application/octet-binary" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "outputData." + format; //フォーマットによってファイル拡張子を変えている
        a.click();
        a.remove();
      }
  return (
    <div className='mt-5'>
        <Button variant="outline" color="dark" leftIcon={<FileExport
          size={30}
          strokeWidth={3}
          color={'#2d5086'}
        />} onClick={(e) => handlerClickDownloadButton(e, "xlsx")}>
          Excelダウンロード
        </Button>
    </div>
  )
}

