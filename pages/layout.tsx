import { GoogleTagManager } from '@next/third-parties/google'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
     <script type='text/javascript' id='pagemapIdscript' defer src='https://bot.linkbot.com/bot.js#35194-37352?property-id=35194-37352'></script>
      <script async src="https://cse.google.com/cse.js?cx=a57e7f63f92bd473d"></script>
        <div className="gcse-search"></div>
      <GoogleTagManager gtmId="AW-16491756846" />
    </html>
  )
}
