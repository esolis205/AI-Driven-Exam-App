import { NextResponse } from "next/server";

export async function GET() {
  const payload = {
    readiness: { score: 76.0, percentile: 68 },
    metrics: { correctToday: 12, studyMinutes7d: 160, objectivesMastered: 5 },
    tips: [
      "Review IAM policies and least-privilege examples.",
      "Rehearse subnetting with CIDR / VPC endpoint scenarios.",
      "Practice 5 dropdown PBQs on incident response workflow."
    ]
  };
  return NextResponse.json(payload);
}
