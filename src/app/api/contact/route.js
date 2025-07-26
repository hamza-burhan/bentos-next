import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';


export async function POST(request) {
  const { name, email, message } = await request.json();

    console.log(" message:", message)
    console.log(" email:", email)
    console.log(" name:", name)


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'hamzaburhan0986@gmail.com',
        pass: 'demgrdhyliongacj', 
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: `Portfolio ${name}`,
        to: 'hamzaburhan0986@gmail.com',
        subject: `Portfolio message from ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Email:</strong> ${email}</p>
        `,
      });

      return NextResponse.json(
        { success: true },
        { status: 200 });

    } catch (error) {
      console.error(error);
      return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 });
    }
}