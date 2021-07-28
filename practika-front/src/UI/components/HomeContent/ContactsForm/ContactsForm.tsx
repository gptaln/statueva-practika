import React, {useEffect} from 'react'
import {Form, Formik, FormikValues} from 'formik'
import * as Yup from 'yup'
import {InputsWrapper, TextFieldStyled} from './ContactsForm-styled'
import {useMutation} from '@apollo/client'
import {ADD_USER} from '../../../../DAL/mutations/users'

const initialValues = {
    name: '',
    phone: '',
    message: ''
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Это обязательное поле'),
    phone: Yup.string()
        .required('Это обязательное поле')
        .matches(
            /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g,
            'Неверный номер телефона'
        ),
    message: Yup.string()
})

export const ContactsForm: React.FC = () => {

    const [addUserMutation, {error, data, loading}] = useMutation(ADD_USER)

    useEffect(() => {

        if (!!error) {
            alert('Произошла внутренняя ошибка сервера!')
        }

        if (!!data && !!data.addUser) {
            alert('Сообщение успешно доставлено!')
        }

    }, [error, data])

    const handleSubmit = (values: FormikValues) => {
        addUserMutation({
            variables: {
                user: {
                    ...values
                }
            }
        })
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {
                formikProps => (

                    <Form>

                        <InputsWrapper>
                            <TextFieldStyled
                                name="name"
                                label="Имя"
                                placeholder="Введите имя..."
                                value={formikProps.values.name}
                                onChange={formikProps.handleChange}
                                error={!!formikProps.touched.name && !!formikProps.errors.name}
                                helperText={formikProps.errors.name}
                                required
                            />

                            <TextFieldStyled
                                name="phone"
                                label="Телефон"
                                placeholder="Введите номер телефона..."
                                value={formikProps.values.phone}
                                onChange={formikProps.handleChange}
                                error={!!formikProps.touched.phone && !!formikProps.errors.phone}
                                helperText={formikProps.errors.phone}
                                required
                            />

                            <TextFieldStyled
                                name="message"
                                label="Сообщение"
                                placeholder="О чём вы думаете?..."
                                value={formikProps.values.message}
                                onChange={formikProps.handleChange}
                                error={!!formikProps.touched.message && !!formikProps.errors.message}
                                helperText={formikProps.errors.message}

                            />

                            <button
                                type="submit"
                                className="popup__send"
                                disabled={!formikProps.dirty || !formikProps.isValid}>
                                Отправить
                            </button>

                        </InputsWrapper>
                    </Form>
                )
            }
        </Formik>
    )

}