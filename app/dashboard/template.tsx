export default function Template({ children }: { children: React.ReactNode }) {
    return <div className=" bg-gray-700  flex justify-between p-2 mr-2  w-full">
         <h1> Dashboard</h1>
        {children}</div>
  }