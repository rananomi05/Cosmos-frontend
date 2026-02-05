import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}


        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              background: "#1b2130",
              color: "#fff",
              border: "1px solid #7C3AED40",
              padding: "16px 20px",
              borderRadius: "12px",
            },
          }}
        />
      </body>
    </html>
  );
}
