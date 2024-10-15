import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

import Layout from '@/components/Layout'
import '@/styles/globals.css'
import LoginModal from '@/components/modals/LoginModals'
import RegisterModal from '@/components/modals/RegisterModel'
import EditModal from '@/components/modals/EditModal';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <Layout>
      <Component {...pageProps} />
      </Layout>
      </SessionProvider>
  )
}