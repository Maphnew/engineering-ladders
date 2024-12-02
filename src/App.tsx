// import './App.css'
// import ApexCharts from './Chart.jsx'

// function App() {
//   return (
//     <>
//       <div>
//         <ApexCharts title={"D7 Developer 7"} series={
//           [
//             {
//               name: "Mr. Spenser",
//               data: [5, 5, 3, 4, 5]
//             }
//           ]
//         }/>
//       </div>
//     </>
//   )
// }

// export default App

import { ThemeProvider } from "./components/theme-provider"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AppContent } from "@/components/app-content"
import './globals.css'

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
        <AppContent />
      </SidebarProvider>
    </ThemeProvider>
  )
}