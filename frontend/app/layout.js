export const metadata = {
  title: "FP&A System",
  description: "Sistema de FP&A profissional"
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  )
}
