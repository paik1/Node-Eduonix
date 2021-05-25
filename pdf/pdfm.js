var pdf = require('pdfkit');

var fs = require('fs');

var file = new pdf;

file.pipe(fs.createWriteStream("pdf-file.pdf"));

file.font('Times-Roman')
    .fontSize(30)
    .text('This is the first page', 50, 50)

// Add another page

file.addPage()
    .fontSize(25)
    .text('This is a second page', 100, 100)

file.end()
console.log('created pdf file successfully');