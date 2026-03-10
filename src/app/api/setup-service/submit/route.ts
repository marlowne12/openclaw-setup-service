import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const lead = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      business: formData.get("business") as string,
      os: formData.get("os") as string,
      channels: formData.getAll("channels") as string[],
      tasks: formData.get("tasks") as string,
      industry: formData.get("industry") as string,
      tier: formData.get("tier") as string,
      referral: formData.get("referral") as string,
      submittedAt: new Date().toISOString(),
    };

    // Validate required fields
    if (!lead.name || !lead.email || !lead.tier) {
      return NextResponse.json(
        { error: "Name, email, and tier are required." },
        { status: 400 }
      );
    }

    // Save lead to data directory
    const dataDir = join(process.cwd(), "data", "leads");
    await mkdir(dataDir, { recursive: true });

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `${timestamp}-${lead.name.replace(/\s+/g, "-").toLowerCase()}.json`;
    await writeFile(
      join(dataDir, filename),
      JSON.stringify(lead, null, 2)
    );

    // TODO: Stripe checkout session creation
    // For now, redirect to a thank-you page
    return NextResponse.redirect(
      new URL("/thank-you", req.url),
      303
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
