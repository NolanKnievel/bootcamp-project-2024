import { NextRequest, NextResponse } from "next/server";
import emailjs from "emailjs-com";

export async function POST(req: NextRequest) {
  try {

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const EMAIL_JS_SERVICE_ID = "service_p8j5x0j";
    const EMAIL_JS_TEMPLATE_ID = "template_b7682mh";
    const EMAIL_JS_PUBLIC_KEY = "UdF-oso8jxuFTppKF";

    emailjs.init({ publicKey: EMAIL_JS_PUBLIC_KEY });

    async function sendEmail() {
      const templateParams = {
        to_name: "Nolan",
        from_name: name,
        message: message,
        reply_to: email,
      };

        await emailjs
        .send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, templateParams)
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
          },
          (error) => {
            console.error("Failed to send email:", error);
          }
        );
    }

    sendEmail();

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
