import { Routes, Route, Navigate } from 'react-router'

import BaseAuthPage from '@/pages/BaseAuthPage'
import LoginForm from '@/components/forms/LoginForm'
import RecoverPasswordForm from '@/components/forms/RecoverPasswordForm'
import ResetPasswordForm from '@/components/forms/ResetPasswordForm'
import SignUpForm from '@/components/forms/SignUpForm'
import CollectionPage from './pages/CollectionPage';
import BaseAppPage from './pages/BaseAppPage';
import AboutPage from './pages/AboutPage';
import ProtectedRoute from '@/components/ProtectedRoute';

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
        <Route path="collection" element={<ProtectedRoute><CollectionPage /></ProtectedRoute>} />
        <Route path="about" element={<AboutPage />} />
      </Route >

    </Routes>
  )
}

export default App;
