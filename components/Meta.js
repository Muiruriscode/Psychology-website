import Head from 'next/head'

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

Meta.defaultProps = {
  title: 'TalkSpace Kenya',
  description:
    'TalkSpace Kenya is where you can get to talk about your issues and get valuable help from the psychologist, Morrin Macharia',
  keywords: 'therapy, Morrin Macharia, depression, anxiety, Talkspace kenya',
}

export default Meta
