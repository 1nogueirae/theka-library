import { Routes, Route, Navigate } from 'react-router'

import BaseAuthPage from '@/pages/BaseAuthPage'
import LoginForm from '@/components/forms/LoginForm'
import RecoverPasswordForm from '@/components/forms/RecoverPasswordForm'
import ResetPasswordForm from '@/components/forms/ResetPasswordForm'
import SignUpForm from '@/components/forms/SignUpForm'
import CollectionPage from './pages/CollectionPage';
import BaseAppPage from './pages/BaseAppPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseAuthPage />}>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignUpForm />} />
        <Route path="recoverpassword" element={<RecoverPasswordForm />} />
        <Route path="resetpassword" element={<ResetPasswordForm />} />
      </Route >

      <Route element={<BaseAppPage />}>
        <Route path="collection" element={<CollectionPage />} />
      </Route >

    </Routes>
  )
}

export default App;
