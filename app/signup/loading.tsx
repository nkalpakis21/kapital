import { Skeleton } from "@/components/ui/skeleton"

export default function SignupLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Skeleton className="h-8 w-40" />
        <div className="ml-auto">
          <Skeleton className="h-9 w-32" />
        </div>
      </div>
      <main className="flex-1 py-12">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-12 w-[250px]" />
              <Skeleton className="h-6 w-full max-w-[600px]" />
              <Skeleton className="h-6 w-full max-w-[500px]" />
            </div>
            <div className="space-y-4">
              {Array(3)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-[400px] w-full rounded-lg" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
