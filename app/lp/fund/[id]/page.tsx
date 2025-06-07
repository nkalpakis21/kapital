import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Building2, Calendar, DollarSign, FileText, Globe, MapPin, Users } from "lucide-react"

interface PageProps {
  params: {
    id: string;
  };
}

export default async function StartupDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  // This would normally fetch data based on the ID
  const startup = {
    id,
    name: "BlockFin Technologies",
    logo: "BT",
    description:
      "Decentralized finance platform for institutional trading with advanced risk management and compliance tools",
    sector: "DeFi",
    founded: "2022",
    location: "San Francisco, CA",
    website: "https://blockfin.tech",
    fundingRound: "Series A",
    targetAmount: "$2M",
    raised: "$750K",
    progress: 37.5,
    tokenStructure: "Revenue Share",
    team: [
      { name: "Sarah Chen", role: "CEO & Co-founder", avatar: "SC" },
      { name: "Michael Rodriguez", role: "CTO & Co-founder", avatar: "MR" },
      { name: "Aisha Johnson", role: "Head of Product", avatar: "AJ" },
    ],
    milestones: [
      { title: "MVP Development", status: "completed", date: "Q1 2023" },
      { title: "Beta Launch", status: "completed", date: "Q2 2023" },
      { title: "Series A Funding", status: "in-progress", date: "Q4 2023" },
      { title: "Product Launch", status: "pending", date: "Q1 2024" },
    ],
    tokenDetails: {
      type: "Revenue Share Token",
      totalSupply: "10M BFT",
      vestingPeriod: "24 months",
      targetReturn: "25%",
      riskLevel: "Medium",
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex h-16 items-center px-4 md:px-6 border-b">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/vc/discover">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Discover
          </Link>
        </Button>
      </div>

      <main className="flex-1 p-6">
        <div className="container max-w-5xl">
          <div className="grid gap-6">
            {/* Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={`/placeholder.svg?height=64&width=64`} />
                      <AvatarFallback className="text-lg">{startup.logo}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="text-3xl font-bold">{startup.name}</h1>
                      <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          <span>{startup.sector}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{startup.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>Founded {startup.founded}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" asChild>
                      <Link href={startup.website} target="_blank">
                        <Globe className="mr-2 h-4 w-4" />
                        Website
                      </Link>
                    </Button>
                    <Button>Make Offer</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{startup.description}</p>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Funding Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Funding Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Raised</span>
                      <span className="font-medium">
                        {startup.raised} / {startup.targetAmount}
                      </span>
                    </div>
                    <Progress value={startup.progress} />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Round</span>
                      <div className="font-medium">{startup.fundingRound}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Progress</span>
                      <div className="font-medium">{startup.progress}%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Token Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Token Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type</span>
                    <Badge variant="outline">{startup.tokenDetails.type}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Supply</span>
                    <span className="font-medium">{startup.tokenDetails.totalSupply}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Vesting Period</span>
                    <span className="font-medium">{startup.tokenDetails.vestingPeriod}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Target Return</span>
                    <span className="font-medium text-green-600">{startup.tokenDetails.targetReturn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Risk Level</span>
                    <Badge variant="secondary">{startup.tokenDetails.riskLevel}</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Team */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  {startup.team.map((member, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                        <AvatarFallback>{member.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-muted-foreground">{member.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Milestones */}
            <Card>
              <CardHeader>
                <CardTitle>Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {startup.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-3 w-3 rounded-full ${
                            milestone.status === "completed"
                              ? "bg-green-500"
                              : milestone.status === "in-progress"
                                ? "bg-yellow-500"
                                : "bg-gray-300"
                          }`}
                        />
                        <span className="font-medium">{milestone.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{milestone.date}</span>
                        <Badge
                          variant={
                            milestone.status === "completed"
                              ? "secondary"
                              : milestone.status === "in-progress"
                                ? "default"
                                : "outline"
                          }
                        >
                          {milestone.status === "completed"
                            ? "Completed"
                            : milestone.status === "in-progress"
                              ? "In Progress"
                              : "Pending"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Placeholder for Pitch Materials */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Pitch Materials
                </CardTitle>
                <CardDescription>Access detailed pitch deck and financial projections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">Pitch materials are available to verified investors</p>
                  <Button>Request Access</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
