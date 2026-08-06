// src/app/actions.js
'use server';

import { google } from 'googleapis';

export async function submitApplication(formData) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        // Handle newlines correctly when reading from env
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Prefix with ' to force Sheets to store these as plain text (USER_ENTERED
    // would otherwise strip leading zeros from phone/matric numbers and
    // re-parse the date, which is the "weird stuff" you're seeing).
    const asText = (value) => (value ? `'${value}` : '');

    // Format array values (checkboxes like areasOfInterest and skills) into comma-separated strings
    const row = [
      new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' }),
      formData.firstName || '',
      formData.lastName || '',
      formData.email || '',
      asText(formData.phone),
      asText(formData.dateOfBirth),
      formData.gender || '',
      formData.campus || '',
      formData.department || '',
      asText(formData.level),
      asText(formData.matricNumber),
      formData.linkedin || '',
      formData.twitter || '',
      formData.github || '',
      Array.isArray(formData.areasOfInterest) 
        ? formData.areasOfInterest.join(', ') 
        : formData.areasOfInterest || '',
      formData.motivation || '',
      formData.skillsExperience || '',
      formData.aspirations || '',
      Array.isArray(formData.skills) 
        ? formData.skills.join(', ') 
        : formData.skills || '',
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'spaceclubsmembers!A:A', // Adjust sheet name if not 'Sheet1'
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Google Sheets Submission Error:', error);
    return { success: false, error: 'Failed to submit application. Please try again.' };
  }
}