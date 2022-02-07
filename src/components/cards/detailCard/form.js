import { useEffect, useState } from "react"
import { ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import { Comentario } from "./comment";
import { DivBot, DivTop } from "./detail.styles";

export const KEY_LOCALSTORAGE = 'COMMENTS';

export const Formulario = ({idGame}) => {
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

    useEffect(() => {
        const getComments = localStorage.getItem(KEY_LOCALSTORAGE);
        if (getComments) {
            const comments = JSON.parse(getComments);
            const filter = comments.find((item) => item.id === idGame)
            setComment(filter);
        }
    }, [idGame])

    const handleSubmit = (values, {setSubmitting, resetForm}) => {
        const getComments = localStorage.getItem(KEY_LOCALSTORAGE);

        const userComment = {
            id: Math.random().toString(16).slice(2),
            likes: 0,
            ...values,
        }

        const thisComments = comment?.comments ? [...comment?.comments] : [];
        const newComments = [{id: idGame, comments: [...thisComments, userComment]}];

        if (getComments) {
            const storageComments = JSON.parse(getComments);
            const otherGameComments = storageComments.filter((item) => item.id !== idGame )

            localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify([...otherGameComments,...newComments]));
        }
        else {
            localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(newComments))
        }

        setComment(...newComments);
        setSubmitting(false);
        resetForm();
    }

    return (
        <>
            <h3>Comentários</h3>
            <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={validation} validateOnMount>
                {({isSubmitting, isValid, resetForm})=> (
                    <Form>
                        <DivTop>
                        <Field name="name" placeholder="Nome..."/>
                        <ErrorMessage name="name" style={{ color: 'red' }} component="span"/>
                    
                        <Field name="email" placeholder="Email"/>
                        <ErrorMessage name="email" style={{ color: 'red' }} component="span"/>

                        <button type="submit" disabled={isSubmitting || !isValid}>Publicar</button>
                        </DivTop>

                        <DivBot>
                        <Field name="comment" placeholder="Digite seu comentário..."/>
                        <ErrorMessage name="comment" style={{ color: 'red' }} component="span"/>
                        </DivBot>

                    </Form>
                )}
            </Formik>
            <div>
                {comment?.comments?.map((value) => (<Comentario key={value.id} value={value} idGame={idGame} comment={comment} />))}
            </div>
        </>
    )
}