import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type');
    
    let data: any = {};
    let attachments: any[] = [];
    let tempFiles: string[] = [];

    // Handle different content types
    if (contentType?.includes('application/json')) {
      // Handle JSON data (from sell form)
      data = await request.json();
    } else if (contentType?.includes('multipart/form-data')) {
      // Handle form data with file uploads
      const formData = await request.formData();
      
      // Extract form fields
      data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        message: formData.get('message') as string,
        form: formData.get('form') as string,
      };
      
      // Handle file attachments
      const files = formData.getAll('attachments') as File[];

      // Process file attachments if any
      for (const file of files) {
        if (file && file.size > 0) {
          // Validate file size (limit to 10MB per file)
          if (file.size > 10 * 1024 * 1024) {
            return NextResponse.json(
              { message: `File ${file.name} is too large. Maximum size is 10MB.` },
              { status: 400 }
            );
          }

          // Validate file type
          const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'text/plain',
            'image/jpeg',
            'image/png',
            'image/gif',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
          ];

          if (!allowedTypes.includes(file.type)) {
            return NextResponse.json(
              { message: `File type ${file.type} is not supported.` },
              { status: 400 }
            );
          }

          // Save file temporarily
          const bytes = await file.arrayBuffer();
          const buffer = Buffer.from(bytes);
          const tempPath = path.join('/tmp', `${Date.now()}-${file.name}`);
          
          await writeFile(tempPath, buffer);
          tempFiles.push(tempPath);

          attachments.push({
            filename: file.name,
            path: tempPath,
            contentType: file.type
          });
        }
      }
    }

    // Extract common fields
    const { name, email, phone, form } = data;

    // Validate required fields
    if (!name || !email) {
      // Clean up temporary files
      for (const tempFile of tempFiles) {
        try {
          await unlink(tempFile);
        } catch (error) {
          console.error('Error deleting temp file:', error);
        }
      }
      
      return NextResponse.json(
        { message: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'afluaflah5733@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || 'iols wdax qzeq febl',
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter configuration
    await transporter.verify();

    // Generate email content based on form type
    let htmlContent = '';
    let textContent = '';

    if (form === 'Sell Form') {
      // Handle sell form data
      const { make, model, year, mileage, condition, description } = data;
      
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #C4A750, #D4B760); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #C4A750; }
            .field-label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; }
            .field-value { color: #333; }
            .car-info { background: #e8f4f8; padding: 20px; border-radius: 8px; margin: 15px 0; }
            .description-box { background: white; padding: 20px; border-radius: 5px; border: 1px solid #ddd; margin-top: 10px; }
            .footer { text-align: center; margin-top: 20px; color: #777; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🚗 New Car Sale Inquiry</h1>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">Castle Cars - Vehicle Purchase Request</p>
            </div>
            
            <div class="content">
              <div class="car-info">
                <h3 style="margin-top: 0; color: #C4A750;">🚙 Vehicle Information</h3>
                <div class="field">
                  <span class="field-label">Make:</span>
                  <span class="field-value">${make || 'Not specified'}</span>
                </div>
                <div class="field">
                  <span class="field-label">Model:</span>
                  <span class="field-value">${model || 'Not specified'}</span>
                </div>
                <div class="field">
                  <span class="field-label">Year:</span>
                  <span class="field-value">${year || 'Not specified'}</span>
                </div>
                <div class="field">
                  <span class="field-label">Mileage:</span>
                  <span class="field-value">${mileage ? `${mileage} km` : 'Not specified'}</span>
                </div>
                <div class="field">
                  <span class="field-label">Condition:</span>
                  <span class="field-value">${condition ? condition.charAt(0).toUpperCase() + condition.slice(1) : 'Not specified'}</span>
                </div>
              </div>

              <h3 style="color: #C4A750;">👤 Owner Information</h3>
              <div class="field">
                <span class="field-label">Full Name:</span>
                <span class="field-value">${name}</span>
              </div>
              
              <div class="field">
                <span class="field-label">📧 Email:</span>
                <span class="field-value">${email}</span>
              </div>
              
              ${phone ? `
              <div class="field">
                <span class="field-label">📱 Phone:</span>
                <span class="field-value">${phone}</span>
              </div>
              ` : ''}
              
              ${description ? `
              <div class="field">
                <span class="field-label">📝 Additional Details:</span>
                <div class="description-box">
                  ${description.replace(/\n/g, '<br>')}
                </div>
              </div>
              ` : ''}
              
              <div class="field">
                <span class="field-label">📅 Submitted:</span>
                <span class="field-value">${new Date().toLocaleString('en-IN', { 
                  timeZone: 'Asia/Kolkata',
                  dateStyle: 'full',
                  timeStyle: 'short'
                })}</span>
              </div>
            </div>
            
            <div class="footer">
              <p>This inquiry was submitted through the Castle Cars "Sell Your Car" form.</p>
              <p>📍 Vengara, Malappuram, Kerala 676304 | 📞 +91 82487 23357</p>
              <p><strong>Next Steps:</strong> Contact the customer within 24 hours to schedule an inspection.</p>
            </div>
          </div>
        </body>
        </html>
      `;

      textContent = `
🚗 New Car Sale Inquiry - Castle Cars

VEHICLE INFORMATION:
Make: ${make || 'Not specified'}
Model: ${model || 'Not specified'}
Year: ${year || 'Not specified'}
Mileage: ${mileage ? `${mileage} km` : 'Not specified'}
Condition: ${condition ? condition.charAt(0).toUpperCase() + condition.slice(1) : 'Not specified'}

OWNER INFORMATION:
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

${description ? `ADDITIONAL DETAILS:\n${description}` : ''}

Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Next Steps: Contact the customer within 24 hours to schedule an inspection.
      `;
    } else {
      // Handle regular contact form
      const { message } = data;
      
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #C4A750, #D4B760); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #C4A750; }
            .field-label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; }
            .field-value { color: #333; }
            .message-box { background: white; padding: 20px; border-radius: 5px; border: 1px solid #ddd; margin-top: 10px; }
            .footer { text-align: center; margin-top: 20px; color: #777; font-size: 12px; }
            .attachments { background: #e8f4f8; padding: 15px; border-radius: 5px; margin-top: 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Message from ${form || 'Contact Form'}</h1>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">Castle Cars - Customer Inquiry</p>
            </div>
            
            <div class="content">
              <div class="field">
                <span class="field-label">👤 Full Name:</span>
                <span class="field-value">${name}</span>
              </div>
              
              <div class="field">
                <span class="field-label">📧 Email Address:</span>
                <span class="field-value">${email}</span>
              </div>
              
              ${phone ? `
              <div class="field">
                <span class="field-label">📱 Phone Number:</span>
                <span class="field-value">${phone}</span>
              </div>
              ` : ''}
              
              ${message ? `
              <div class="field">
                <span class="field-label">💬 Message:</span>
                <div class="message-box">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              ` : ''}
              
              ${attachments.length > 0 ? `
              <div class="attachments">
                <span class="field-label">📎 Attachments:</span>
                <ul>
                  ${attachments.map(att => `<li>${att.filename}</li>`).join('')}
                </ul>
              </div>
              ` : ''}
              
              <div class="field">
                <span class="field-label">📅 Received:</span>
                <span class="field-value">${new Date().toLocaleString('en-IN', { 
                  timeZone: 'Asia/Kolkata',
                  dateStyle: 'full',
                  timeStyle: 'short'
                })}</span>
              </div>
            </div>
            
            <div class="footer">
              <p>This message was sent from the Castle Cars website contact form.</p>
              <p>📍 Vengara, Malappuram, Kerala 676304 | 📞 +91 82487 23357</p>
            </div>
          </div>
        </body>
        </html>
      `;

      textContent = `
New message from ${form || 'Contact Form'}

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

${message ? `Message:\n${message}` : ''}

Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
${attachments.length > 0 ? `\nAttachments: ${attachments.map(att => att.filename).join(', ')}` : ''}
      `;
    }

    // Email options
    const mailOptions = {
      from: {
        name: 'Castle Cars Website',
        address: process.env.GMAIL_USER || 'afluaflah5733@gmail.com'
      },
      to: process.env.RECIPIENT_EMAIL || 'muhammadaflah23524@gmail.com',
      replyTo: email,
      subject: form === 'Sell Form' 
        ? `🚗 Car Sale Inquiry: ${data.year || ''} ${data.make || ''} ${data.model || ''} - ${name}`
        : `🚗 New ${form || 'Contact Form'} Submission from ${name}`,
      html: htmlContent,
      attachments: attachments,
      text: textContent
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    // Clean up temporary files
    for (const tempFile of tempFiles) {
      try {
        await unlink(tempFile);
      } catch (error) {
        console.error('Error deleting temp file:', error);
      }
    }

    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        messageId: info.messageId,
        attachmentCount: attachments.length
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Email sending error:', error);
    
    return NextResponse.json(
      { 
        message: 'Failed to send email',
        error: error.message,
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}