import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import pepconLogo from '../assets/pepcon_logo.png';

const loadLogo = () => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = pepconLogo;
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
  });
};

export const generateReceiptPDF = async (formData, paymentId, amount, returnBase64 = false) => {
  try {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    
    // Theme colors
    const primaryColor = [29, 78, 216]; // #1d4ed8 (Tailwind blue-700)
    const textColor = [51, 51, 51];

    // Load Logo
    let logoImg;
    try {
      logoImg = await loadLogo();
    } catch (e) {
      console.warn("Could not load logo image for PDF", e);
    }

    // --- Header ---
    if (logoImg) {
      // Constrain height to 20 units so it doesn't overlap the line at y=35
      const imgHeight = 20;
      const imgWidth = (logoImg.width * imgHeight) / logoImg.height;
      doc.addImage(logoImg, 'PNG', 15, 10, imgWidth, imgHeight);
    } else {
      doc.setFontSize(24);
      doc.setTextColor(...primaryColor);
      doc.setFont('helvetica', 'bold');
      doc.text("PEPCON", 15, 25);
    }

    // Title
    doc.setFontSize(24);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text("PAYMENT RECEIPT", pageWidth - 15, 25, { align: 'right' });

    // Thick blue line
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(1);
    doc.line(15, 35, pageWidth - 15, 35);

    // --- Invoice Info ---
    doc.setFontSize(10);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    
    const invoiceNo = `INV-${paymentId.slice(-6).toUpperCase()}`;
    const date = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    
    doc.text(`Invoice No : ${invoiceNo}`, 15, 45);
    doc.text(`Date: ${date}`, pageWidth - 15, 45, { align: 'right' });

    // --- Bill To Section ---
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text("Bill To:", 15, 60);

    const clientName = `${formData.firstName || ''} ${formData.lastName || ''}`.trim();
    const address = `${formData.city || ''}, ${formData.country || ''}`.trim();
    const company = formData.university || formData.affiliation || 'N/A';
    const contact = formData.email || formData.phone || '';

    // Left Column
    doc.setFontSize(10);
    doc.text(`Client Name:   ${clientName}`, 15, 70);
    doc.text(`Address:       ${address || 'N/A'}`, 15, 78);

    // Right Column
    doc.text(`Company Name:  ${company}`, pageWidth / 2, 70);
    doc.text(`Phone / Email: ${contact}`, pageWidth / 2, 78);

    // --- Dotted Line separator ---
    const drawDottedLine = (y) => {
      doc.setDrawColor(150, 150, 150);
      doc.setLineDashPattern([1, 1], 0);
      doc.line(15, y, pageWidth - 15, y);
      doc.setLineDashPattern([], 0); // reset
    };

    drawDottedLine(90);

    // --- Table ---
    autoTable(doc, {
      startY: 95,
      theme: 'plain',
      head: [['Description', 'Category', 'Qty', 'Rate', 'Amount']],
      body: [
        ['Annual Global Summit on Business Economics & Foreign Trade', formData.category || 'Participant', '01', `${amount}/-`, `${amount}/-`],
        ['Date & Venue: Sep 18, 2026 (Virtual)', '', '', '', '']
      ],
      headStyles: {
        fontStyle: 'bold',
        textColor: [0, 0, 0],
        fontSize: 11
      },
      styles: {
        fontSize: 10,
        cellPadding: 4
      },
      columnStyles: {
        0: { cellWidth: 70 },
        2: { halign: 'center' },
        3: { halign: 'right' },
        4: { halign: 'right' }
      }
    });

    const finalY = doc.lastAutoTable.finalY || 120;

    drawDottedLine(finalY + 5);

    // --- Total ---
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text("TOTAL", pageWidth - 50, finalY + 15, { align: 'right' });
    doc.text(`${amount}/-`, pageWidth - 15, finalY + 15, { align: 'right' });

    drawDottedLine(finalY + 20);

    // --- Footer info (Shipping/Payment) ---
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9);
    doc.text("In words : (Electronic transaction)", 15, finalY + 30);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text("Shipping Address", 15, finalY + 45);
    doc.text("Billing Address", pageWidth / 2, finalY + 45);

    doc.setFont('helvetica', 'normal');
    doc.text(address || 'N/A', 15, finalY + 52);
    doc.text(address || 'N/A', pageWidth / 2, finalY + 52);

    doc.setFont('helvetica', 'bold');
    doc.text("Payment Method -", 15, finalY + 70);
    doc.setFont('helvetica', 'normal');
    doc.text("Razorpay (Online)", 50, finalY + 70);

    // --- Page Footer ---
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(1);
    doc.line(15, pageHeight - 25, pageWidth - 15, pageHeight - 25);

    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text("hello@peptides.co.in", pageWidth / 2, pageHeight - 20, { align: 'center' });
    doc.text("www.peptides.co.in", pageWidth - 15, pageHeight - 20, { align: 'right' });

    // Blue bottom bar
    doc.setFillColor(...primaryColor);
    doc.rect(0, pageHeight - 15, pageWidth, 15, 'F');
    doc.setTextColor(255, 255, 255);
    doc.text("Mahaveer Radiance, opp. Madhapur Police Station, Madhapur, Hyderabad - 500081", pageWidth / 2, pageHeight - 6, { align: 'center' });

    // Save or Return Base64
    if (returnBase64) {
      const dataUri = doc.output('datauristring');
      return dataUri.split(',')[1]; // Return raw base64 data
    } else {
      doc.save(`Pepcon-Receipt-${paymentId}.pdf`);
    }

  } catch (error) {
    console.error("Error generating PDF receipt:", error);
  }
};
