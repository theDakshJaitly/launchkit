import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const signature = request.headers.get("x-dodo-signature");
    if (!signature) {
        return NextResponse.json({ error: "Missing signature" }, { status: 401 });
    }

    const rawBody = await request.text();

    const secret = process.env.DODO_WEBHOOK_SECRET;
    if (!secret) {
        console.error("Missing DODO_WEBHOOK_SECRET environment variable");
        return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const expectedSignature = crypto
        .createHmac("sha256", secret)
        .update(rawBody)
        .digest("hex");

    const sigBuffer = Buffer.from(signature, "hex");
    const expectedBuffer = Buffer.from(expectedSignature, "hex");

    if (sigBuffer.length !== expectedBuffer.length || !crypto.timingSafeEqual(sigBuffer, expectedBuffer)) {
        return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const payload = JSON.parse(rawBody);

    switch (payload.event_type) {
        case "payment.succeeded": {
            const githubUsername = payload.data?.metadata?.github_username;
            console.log("Payment succeeded:", payload.data?.payment_id, "GitHub:", githubUsername);
            // TODO: auto-invite githubUsername to private template repo via GitHub API
            // TODO: send confirmation email via Resend with repo access details
            break;
        }
        case "payment.failed":
            console.log("Payment failed:", payload.data?.payment_id);
            break;
        default:
            console.log("Unhandled webhook event:", payload.event_type);
    }

    return NextResponse.json({ received: true }, { status: 200 });
}
