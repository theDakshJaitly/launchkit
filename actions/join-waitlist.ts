"use server";

import { resend } from "@/lib/resend/client";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
    email: z.string().email(),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
});

export async function joinWaitlist(prevState: any, formData: FormData) {
    const email = formData.get("email") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;

    const result = schema.safeParse({ email, firstName, lastName });

    if (!result.success) {
        return { error: "Please fill in all fields." };
    }

    let success = false;

    try {
        // 1. Add to Resend Audience (Contact)
        const { error } = await resend.contacts.create({
            email,
            firstName,
            lastName,
            unsubscribed: false,
            audienceId: process.env.RESEND_AUDIENCE_ID || "general",
        });

        if (error) {
            console.error("Resend Error:", error);
            return { error: "Failed to join waitlist. Please try again." };
        }

        // 2. Send Welcome Email
        await resend.emails.send({
            from: "LaunchX <hello@launchx.page>",
            to: email,
            subject: "Welcome to LaunchX + Your 50% Off Code",
            html: `
            <div style="font-family: sans-serif; font-size: 16px; color: #333; background-color: #f9f9f9; padding: 40px; border-radius: 8px;">
                <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                    <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 20px; color: #000;">Welcome to LaunchX! 🚀</h1>
                    <p style="line-height: 1.6; margin-bottom: 20px;">
                        Thanks for joining the waitlist! We're excited to have you on board.
                    </p>
                    <p style="line-height: 1.6; margin-bottom: 20px;">
                        As promised, here is your 50% off discount code for when we launch:
                    </p>
                    <div style="background-color: #000; color: #fff; padding: 15px 25px; border-radius: 6px; display: inline-block; font-family: monospace; font-size: 18px; letter-spacing: 1px; margin-bottom: 30px;">
                        LAUNCH50
                    </div>
                    <p style="line-height: 1.6; margin-bottom: 20px;">
                        We'll notify you as soon as spots open up. In the meantime, if you have any questions or feedback, feel free to reply to this email.
                    </p>
                    <p style="color: #666; font-size: 14px; margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px;">
                        Cheers,<br>The LaunchX Team
                    </p>
                </div>
            </div>
            `,
        });

        success = true;
    } catch (err) {
        console.error(err);
        return { error: "Something went wrong" };
    }

    if (success) {
        redirect("/waitlist/success");
    }
}
