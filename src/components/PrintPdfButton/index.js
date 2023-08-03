import React, { useState } from 'react'
import html2pdf from 'html2pdf.js'
import { Wrapper, Button } from './PrintPdfButton.style'

const PrintPdfButton = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = async () => {
    // Hide button
    setIsHidden(true);

    // PDF Process Settings
    const element = document.querySelector("#app")
    const width = element.offsetWidth
    const height = Math.max(element.scrollHeight, element.offsetHeight)
    // options for PDF output
    const opt = {
      image: { type: 'jpeg', quality: 1},
      pagebreak: { before: '.beforeClass', after: ['#after1', '#after2'], avoid: 'img' },
      html2canvas: {
        dpi: 192,
        scale:4,
        letterRendering: true,
        useCORS: true
      },
      jsPDF: {
        unit: 'px',
        format: [height, width],
      }
    }
    await html2pdf(element, opt);
    // Show button after process
    setIsHidden(false);
  }

  return (
    <Wrapper>
      <Button type="button"
      onClick={handleClick}
      opacity={isHidden}
      >Imprimir PDF</Button>
    </Wrapper>
  )
}

export default PrintPdfButton
