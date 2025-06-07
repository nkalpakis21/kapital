import { Skeleton } from "@/components/ui/skeleton"

export function DashboardSkeleton() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex h-16 items-center px-4 md:px-6 border-b">
        <Skeleton className="h-8 w-40" />
        <div className="ml-auto">
          <Skeleton className="h-9 w-32" />
        </div>
      </div>
      <main className="flex-1 p-6">
        <div className="container max-w-7xl">
          <div className="space-y-6">
            <Skeleton className="h-12 w-64" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Skeleton className="h-32" />
              <Skeleton className="h-32" />
              <Skeleton className="h-32" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Skeleton className="h-64" />
              <Skeleton className="h-64" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
