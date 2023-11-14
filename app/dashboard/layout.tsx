export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="bg-slate-800 text-white m-2 p-3 ">
        {/* Include shared UI here e.g. a header or sidebar */}
       
   
        {children}
      </section>
    )
  }