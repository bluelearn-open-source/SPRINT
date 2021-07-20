import Document, { Head, Main, NextScript } from 'next/document'

const {title,description,image}={
  title:`BlueLearn SPRINT Let's change the world together with Open source!`,
  description:`BlueLearn Open-Sauce-Club is open to everyone whether you're new to development, a student or a long-time contributor. Open your first pull request and generate a personalized music certificate at here`,
  image:`/OpenSauce_Poster_final.png`
}

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          {/* <!-- Primary Meta Tags --> */}
<title>{title}</title>
<meta name="title" content={title}/>
<meta name="description" content={description}/>

{/* <!-- Open Graph / Facebook --> */}
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://bluesprint.vercel.app/"/>
<meta property="og:title" content={title}/>
<meta property="og:description" content={description}/>
<meta property="og:image" content={image}/>

{/* <!-- Twitter --> */}
<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://bluesprint.vercel.app/"/>
<meta property="twitter:title" content={title}/>
<meta property="twitter:description" content={description}/>
<meta property="twitter:image" content={image}/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}