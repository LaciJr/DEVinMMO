import { useState } from "react"
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'

export const Formulario = (id) => {
    const [comment, setComment] = useState({});

    const initValues = {
        name: '',
        email: '',
        comment: '',
    }

    const validation = Yup.object().shape({
        name: Yup.string().required('Campo Obrigatório'),
        email: Yup.string().required('Campo Obrigatório').email('Email inválido'),
        comment: Yup.string().required('Campo Obrigatório')
    })

    return (
        <div>
            <h3>Comentários</h3>

            <Formik initialValues={initValues} onSubmit={console.log('enviou')} validationSchema={validation} validateOnMount>
                {({isSubmitting, resetForm, isValid})=> (
                    <Form>
                        <Field name="name" placeholder="Nome..."/>
                        <ErrorMessage name="name" style={{ color: 'red' }} component="span"/>

                        <Field name="email" placeholder="Email"/>
                        <ErrorMessage name="email" style={{ color: 'red' }} component="span"/>

                        <Field name="comment" placeholder="Digite seu comentário..."/>
                        <ErrorMessage name="comment" style={{ color: 'red' }} component="span"/>

                        <button type="submit" disabled={isSubmitting || !isValid}>Publicar</button>
                    </Form>
                )}
            </Formik>
 
        </div>
    )
}