import type { Metadata } from "next";
import "./globals.css";
import "./navy-refresh.css";
export const metadata: Metadata = {metadataBase:new URL("https://zepaxtechnology.com"),title: "Business Automation, CRM & AI Agents | ZEPAX Technology",description:"ZEPAX Technology connects your business with CRM setup, n8n and Make automation, AI receptionists and custom MCP development. Book a free consultation.",icons:{icon:"/zepax-transparent.png"}};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:`try{var t=localStorage.getItem("zepax-theme");document.documentElement.dataset.theme=t==="dark"||t==="light"?t:"light"}catch(e){}`}}/></head><body>{children}</body></html>}