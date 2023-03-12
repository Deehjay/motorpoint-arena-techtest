import Header from "./Header";
import "./styles/globals.css";

export const metadata = {
  title: "Motorpoint Arena Tech Test - Daniel James",
  description: "This is my tech test attempt for Motorpoint Arena",
  icons: {
    icon: "https://www.motorpointarenanottingham.com/ArticleMedia/Images/motorpoint%20logos/favicon.png?_7.50.1",
    shortcut:
      "https://www.motorpointarenanottingham.com/ArticleMedia/Images/motorpoint%20logos/favicon.png?_7.50.1",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
