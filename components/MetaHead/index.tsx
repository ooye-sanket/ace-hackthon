import { MetaHeadType } from '@/types/meta-head-type'
import Head from 'next/head'

const MetaHead: React.FunctionComponent<MetaHeadType> = ({
  title="Local-hub Community",
  description="Learn in public, Build in public",
  children
}: MetaHeadType, props) => {
  return (
    <Head {...props}>
      <title>{`${title} - ${description}`}</title>
      <link rel="apple-touch-icon" sizes="180x180" href='/assets/favicon/apple-touch-icon.png' />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/assets/favicon/site.webmanifest" />
      {children}
    </Head>
  )
}

export default MetaHead