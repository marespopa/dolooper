import React from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const ExportToCanvas = () => {
  const doExport = () => {
    let element = document.getElementById('tasks'),
      htmlWidth = element.clientWidth,
      htmlHeight = element.clientHeight,
      topLeftMargin = 15,
      header = {
        left: htmlWidth / 2,
        top: 60,
        title: 'Tasks Report',
        height: 120,
        font: {
          family: 'helvetica',
          type: 'bold',
          size: 32,
        },
      },
      pdfWidth = htmlWidth + topLeftMargin * 2,
      pdfHeight = pdfWidth * 1.5 + topLeftMargin * 2,
      canvasWidth = htmlWidth,
      canvasHeight = htmlHeight,
      totalPDFPages = Math.ceil(canvasHeight / pdfHeight) - 1

    const getDate = separator => {
      separator = separator || '/'
      let today = new Date(),
        dd = String(today.getDate()).padStart(2, '0'),
        mm = String(today.getMonth() + 1).padStart(2, '0'),
        yyyy = today.getFullYear()

      return mm + separator + dd + separator + yyyy
    }

    const addHeader = doc => {
      doc.setFont(header.font.family)
      doc.setFontType(header.font.type)
      doc.setFontSize(header.font.size)
      doc.text(header.left, header.top, header.title, 'center')
    }

    html2canvas(document.querySelector('#tasks'), { allowTaint: true }).then(
      function(canvas) {
        canvas.getContext('2d')

        let imgData = canvas.toDataURL('image/jpeg', 1.0),
          doc = new jsPDF('p', 'pt', [pdfWidth, pdfHeight]),
          filename = 'tasks-' + getDate('-')

        doc.text(htmlWidth - 80, 30, getDate('/'))
        addHeader(doc)

        doc.addImage(
          imgData,
          'JPG',
          topLeftMargin,
          header.height,
          canvasWidth,
          canvasHeight
        )

        for (var i = 1; i <= totalPDFPages; i++) {
          doc.addPage(pdfWidth, pdfHeight)
          doc.addImage(
            imgData,
            'JPG',
            topLeftMargin,
            -(pdfHeight * i) + topLeftMargin * 4 + 96,
            canvasWidth,
            canvasHeight
          )
        }
        doc.save(filename)
      }
    )
  }

  return (
    <button className="btn export" onClick={doExport}>
      <span>Export</span>
    </button>
  )
}

export default ExportToCanvas
