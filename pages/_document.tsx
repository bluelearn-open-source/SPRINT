import Document, { Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          {/* <!-- Primary Meta Tags --> */}
<title>BlueLearn SPRINT Let's change the world together with Open source!</title>
<meta name="title" content="BlueLearn SPRINT Let's change the world together with Open source!"/>
<meta name="description" content="This repo is to welcome beginners to Github and the opensource community by helping them learn how to make their first PR and contributions to open source!
So, try contributing in a meaningful way to other BlueLearn SPRINT issues and if you still want to generate a music certificate or add yourself to bluesprint.vercel.app go ahead and raise a PR."/>

{/* <!-- Open Graph / Facebook --> */}
<meta property="og:type" content="website">
<meta property="og:url" content="https://bluesprint.vercel.app/"/>
<meta property="og:title" content="BlueLearn SPRINT Let's change the world together with Open source!"/>
<meta property="og:description" content="This repo is to welcome beginners to Github and the opensource community by helping them learn how to make their first PR and contributions to open source!
So, try contributing in a meaningful way to other BlueLearn SPRINT issues and if you still want to generate a music certificate or add yourself to bluesprint.vercel.app go ahead and raise a PR."/>
<meta property="og:image" content="/ss.jpg"/>

{/* <!-- Twitter --> */}
<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://bluesprint.vercel.app/"/>
<meta property="twitter:title" content="BlueLearn SPRINT Let's change the world together with Open source!"/>
<meta property="twitter:description" content="This repo is to welcome beginners to Github and the opensource community by helping them learn how to make their first PR and contributions to open source!
So, try contributing in a meaningful way to other BlueLearn SPRINT issues and if you still want to generate a music certificate or add yourself to bluesprint.vercel.app go ahead and raise a PR."/>
<meta property="twitter:image" content="/ss.jpg"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}