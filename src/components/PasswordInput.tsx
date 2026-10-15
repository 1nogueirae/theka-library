import { useState } from 'react'

import Eye from '@/assets/icons/Eye.svg?react'
import EyeSlash from '@/assets/icons/EyeSlash.svg?react'

import TextInput from '@/components/TextInput'
import type { TextInputProps } from '@/components/TextInput'

type PasswordInputProps = Omit<TextInputProps, 'type' | 'icon'>

function PasswordInput({ ...rest }: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false)

    const passwordType = showPassword ? 'text' : 'password'

    return (
        <TextInput
            type={passwordType}
            icon={showPassword ? <Eye onClick={() => setShowPassword(false)} /> : <EyeSlash onClick={() => setShowPassword(true)} />}
            {...rest}
        />
    )
}

export default PasswordInput