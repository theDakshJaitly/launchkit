"use server";

export async function submitSurvey(data: any) {
    // Log the data for now. In a production app, save to Supabase or SendGrid webhook etc.
    console.log("🎉 NEW SURVEY SUBMISSION:", JSON.stringify(data, null, 2));

    // Let's pretend it takes a tiny bit of time to save
    await new Promise((resolve) => setTimeout(resolve, 500));

    return { success: true };
}
