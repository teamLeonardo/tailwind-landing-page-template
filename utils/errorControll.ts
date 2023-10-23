// @ts-nocheck
'use client'

import * as yup from 'yup'

const errorUtils = {
    async buildError(error) {

        const errors = {}

        if (error instanceof yup.ValidationError) {
            errors[error.path] = error.message
        }
        console.log(errors);
        
        return errors
    }
}

export default errorUtils