import { Modal, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import styles from './FormModal.module.css';

export default function FormModal({ open, close }) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    //For right now this modal is only used to schedule posts
    //We can make this a template if you want just let me know 

    return (
        <Modal show={open} onHide={close}>

            <Modal.Header closeButton>
                <Modal.Title>Scedule Post</Modal.Title>
            </Modal.Header>
            
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Modal.Body>

                    {/* TODO: autopopulate based on what campaign is selected */}
                    <Form.Label className={styles.label}>Campaign</Form.Label>
                    {/* register your input into the hook by invoking the "register" function */}
                    <Form.Control defaultValue="Campaign" {...register("campaign", { required: true })} />
                    {errors.campaign && <Row><Form.Text>This field is required</Form.Text></Row>}

                    <Form.Label className={styles.label}>Caption</Form.Label>
                    {/* include validation with required or other standard HTML validation rules */}
                    <Form.Control defaultValue="Howdy Guys!" {...register("caption", { required: true })} />
                    {errors.caption && <Row><Form.Text>This field is required</Form.Text></Row>}

                    <Form.Label className={styles.label}>Image</Form.Label>
                    <Form.Control type="file" />

                </Modal.Body>

                <Modal.Footer>
                    <Button type="submit">Schedule</Button>
                </Modal.Footer>

            </Form>

        </Modal >

    )
}
