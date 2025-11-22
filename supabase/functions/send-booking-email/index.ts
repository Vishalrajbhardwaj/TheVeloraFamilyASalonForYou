import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface BookingEmailData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceName: string;
  servicePrice: number;
  bookingDate: string;
  bookingTime: string;
  staffName?: string;
  notes?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const bookingData: BookingEmailData = await req.json();

    const emailSubject = `New Booking - ${bookingData.serviceName}`;
    const emailBody = `
      New Booking Received!
      
      Customer Details:
      Name: ${bookingData.customerName}
      Phone: ${bookingData.customerPhone}
      Email: ${bookingData.customerEmail}
      
      Booking Details:
      Service: ${bookingData.serviceName}
      Price: ₹${bookingData.servicePrice}
      Date: ${bookingData.bookingDate}
      Time: ${bookingData.bookingTime}
      ${bookingData.staffName ? `Staff: ${bookingData.staffName}` : ''}
      ${bookingData.notes ? `Notes: ${bookingData.notes}` : ''}
      
      Please confirm this booking as soon as possible.
      
      - Velora Salon Booking System
    `;

    console.log('Booking email notification prepared:', {
      to: 'thevelorafamilysalon@gmail.com',
      subject: emailSubject,
      customerName: bookingData.customerName,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Email notification processed',
        emailPreview: {
          to: 'thevelorafamilysalon@gmail.com',
          subject: emailSubject,
          body: emailBody,
        },
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing booking email:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});