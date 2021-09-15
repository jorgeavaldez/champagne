import { Row, Col, Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import Layout from '../../src/components/Layout';
import AdminLayout from '../../src/components/AdminLayout';

import styles from '../../styles/pages/campaign.module.css';

function CreateCampaign() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Layout>
      <AdminLayout title="Calender">

        <Row className='w-100'>
          <Col lg={12}>
            <Form onSubmit={handleSubmit(onSubmit)}>

              <Form.Label className={styles.label}>Name</Form.Label>
              <Form.Control defaultValue="" {...register("name", { required: true })} />
              {errors.campaign && <Row><Form.Text>This field is required</Form.Text></Row>}

              <Form.Label className={styles.label}>Platform</Form.Label>
              <Form.Control defaultValue="" {...register("social_network", { required: true })} />
              {errors.caption && <Row><Form.Text>This field is required</Form.Text></Row>}

              <Form.Label className={styles.label}>Type of Giveaway</Form.Label>
              <Form.Select defaultValue="Choose.." {...register("giveaway", { required: true })}>
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
              {errors.campaign && <Row><Form.Text>This field is required</Form.Text></Row>}

              <Form.Label className={styles.label}>Rewards</Form.Label>
              <Form.Control defaultValue="" {...register("rewards", { required: true })} />
              {errors.campaign && <Row><Form.Text>This field is required</Form.Text></Row>}

              <Form.Label className={styles.label}>Metrics for Winner</Form.Label>
              <Form.Select defaultValue="Choose.." {...register("metrics", { required: true })}>
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
              {errors.campaign && <Row><Form.Text>This field is required</Form.Text></Row>}

              <Form.Label className={styles.label}>Number of Winners</Form.Label>
              <Form.Control defaultValue="" {...register("number", { required: true })} />
              {errors.campaign && <Row><Form.Text>This field is required</Form.Text></Row>}

              <Row className="w-100">

                <Col>
                  <Form.Label className={styles.label}>Start Date</Form.Label>
                  <Form.Control defaultValue="" {...register("startDate", { required: true })} />
                  {errors.campaign && <Row><Form.Text>This field is required</Form.Text></Row>}
                </Col>

                <Col>
                  <Form.Label className={styles.label}>End Date</Form.Label>
                  <Form.Control defaultValue="" {...register("endDate", { required: true })} />
                  {errors.campaign && <Row><Form.Text>This field is required</Form.Text></Row>}
                </Col>

              </Row>

              <Button type="submit">Start Campaign</Button>

            </Form>
          </Col>
        </Row>

      </AdminLayout>
    </Layout>
  );
}

export default CreateCampaign;