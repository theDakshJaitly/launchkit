import { NextResponse } from "next/server";
import DodoPayments from "dodopayments";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { addLaunchpadOS, name, email, github } = body || {};

    if (!name || !email || !github) {
      return NextResponse.json({ error: "Name, email, and GitHub username are required." }, { status: 400 });
    }

    if (!process.env.DODO_PAYMENTS_API_KEY) {
      return NextResponse.json({ error: "Missing DODO_PAYMENTS_API_KEY." }, { status: 500 });
    }

    if (!process.env.DODO_GENERAL_SAAS_PRODUCT_ID) {
      return NextResponse.json({ error: "Missing DODO_GENERAL_SAAS_PRODUCT_ID." }, { status: 500 });
    }

    if (addLaunchpadOS && !process.env.DODO_LAUNCHPAD_OS_PRODUCT_ID) {
      return NextResponse.json({ error: "Missing DODO_LAUNCHPAD_OS_PRODUCT_ID." }, { status: 500 });
    }

    const requestUrl = new URL(request.url);
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || requestUrl.origin;
    const returnUrl = `${baseUrl}/success`;

    const dodo = new DodoPayments({
      bearerToken: process.env.DODO_PAYMENTS_API_KEY,
      environment: (process.env.DODO_PAYMENTS_ENV as "live_mode" | "test_mode") || "test_mode",
    });

    const productCart = [
      {
        product_id: process.env.DODO_GENERAL_SAAS_PRODUCT_ID,
        quantity: 1,
      },
    ];

    if (addLaunchpadOS) {
      productCart.push({
        product_id: process.env.DODO_LAUNCHPAD_OS_PRODUCT_ID as string,
        quantity: 1,
      });
    }

    const response = await dodo.checkoutSessions.create({
      customer: {
        email,
        name,
      },
      metadata: {
        github_username: github,
        has_notion: addLaunchpadOS ? "true" : "false",
      },
      product_cart: productCart,
      return_url: returnUrl,
      customization: {
        theme: "dark",
      },
    });

    if (!response.checkout_url) {
      return NextResponse.json({ error: "Failed to create checkout session." }, { status: 500 });
    }

    return NextResponse.json({ checkoutUrl: response.checkout_url });
  } catch (error) {
    console.error("Failed to create checkout session:", error);
    return NextResponse.json({ error: "Failed to create checkout session." }, { status: 500 });
  }
}
