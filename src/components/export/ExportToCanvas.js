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
        top: 54,
        title: 'Tasks Report',
        height: 96,
        font: {
          family: 'helvetica',
          type: 'bold',
          size: 32
        }
      },
      pdfWidth = htmlWidth + topLeftMargin * 2,
      pdfHeight = pdfWidth * 1.5 + topLeftMargin * 2,
      canvasWidth = htmlWidth,
      canvasHeight = htmlHeight,
      totalPDFPages = Math.ceil(canvasHeight / pdfHeight) - 1

    const getDate = (separator) => {
      separator = separator || '/'
      let today = new Date(),
        dd = String(today.getDate()).padStart(2, '0'),
        mm = String(today.getMonth() + 1).padStart(2, '0'),
        yyyy = today.getFullYear()

      return mm + separator + dd + separator + yyyy
    }

    const addLogo = (doc) => {
      const imgData =
        'data:image/png;base64,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'
      doc.addImage(imgData, 'JPG', topLeftMargin, 30, 116, 32)
    }

    const addDate = (doc) => {
      doc.text(htmlWidth - 80, 48, getDate('/'))
    }

    const addHeader = (doc) => {
      doc.setFont(header.font.family)
      doc.setFontType(header.font.type)
      doc.setFontSize(header.font.size)
      doc.setTextColor(64, 64, 64);
      doc.text(header.left, header.top, header.title, 'center')
    }

    html2canvas(document.querySelector('#tasks'), { allowTaint: true }).then(
      function(canvas) {
        canvas.getContext('2d')

        let imgData = canvas.toDataURL('image/jpeg', 1.0),
          doc = new jsPDF('p', 'pt', [pdfWidth, pdfHeight]),
          filename = 'tasks-' + getDate('-')

        addLogo(doc)
        addDate(doc)
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
            -(pdfHeight * i) + topLeftMargin * 4 + 32,
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
