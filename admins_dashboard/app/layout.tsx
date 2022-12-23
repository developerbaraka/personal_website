import '../assets/styles/main.css'
import BottomNavigationBar from '../componnents/global/BottomNavigationBar'
import TopNavigationBar from '../componnents/global/TopNavigationBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <TopNavigationBar />
        <main>{children}</main>
        <BottomNavigationBar/>
      </body>
    </html>
  )
}
