import { useMemo } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import AdminLayout from '../../src/components/AdminLayout';

import styles from '../../styles/pages/campaign.module.css';

function CreateCampaign() {
  const { register, getValues, setValue, handleSubmit, formState: { errors }, watch } = useForm();
  const onSubmit = data => console.log(data);
  const rewardType = watch("rewardType");

  const RewardDropDown = useMemo(() => {
    if (rewardType !== null && !getValues("reward")) {
      register("reward", { required: true });
    }

    if (rewardType === "nearTokens") {
      return (
        <Row>
          <Col>
            <Form.Label className={styles.label}>How many Near Tokens would you like to send?</Form.Label>
            <Form.Control type="number" min="1" defaultValue="" name="reward" onChange={(e) => setValue("reward", e.target.value)} />
          </Col>
        </Row>
      )
    }

    if (rewardType === "NFT") {
      return (
        <Row>
          <Col>
            <Form.Label className={styles.label}>Upload NFT File</Form.Label>
            <Form.Control type="file" name="reward" onChange={(e) => setValue("reward", e.target.value)} />
          </Col>
        </Row>
      )
    }

    else {
      return null;
    }

  }, [rewardType]);


  return (
    <AdminLayout title="CREATE CAMPAIGN">

      <Row className={`mt-lg-2 ${styles.formRow}`}>
        <Form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

          <Form.Label className={styles.label}>Name</Form.Label>
          <Form.Control defaultValue="" {...register("name", { required: true })} />
          {errors.name && <Row><Form.Text>This field is required</Form.Text></Row>}

          <Form.Label className={styles.label}>Platform</Form.Label>
          <Row>
            <Col>
              <Button onClick={() => setValue("socialNetwork", "Instagram", { shouldValidate: true })} className={`${getValues("socialNetwork") === "Instagram" ? 'active' : ''}`}>Instagram</Button>
            </Col>
            <Col>
              <Button onClick={() => setValue("socialNetwork", "Twitter", { shouldValidate: true })} className={`${getValues("socialNetwork") === "Twitter" ? 'active' : ''}`}>Twitter</Button>
            </Col>
          </Row>
          <Form.Control type="hidden" {...register("socialNetwork", { required: true })} />
          {errors.socialNetwork && <Row><Form.Text>This field is required</Form.Text></Row>}

          <Form.Label className={styles.label}>Type of Giveaway</Form.Label>
          <Form.Select defaultValue="Choose.." {...register("giveaway", { required: true })}>
            <option>Comment Giveaway</option>
            <option>Like and Repost Giveaway</option>
            <option>Hashtag Giveaway</option>
            <option>Follower Giveaway</option>
          </Form.Select>
          {errors.giveaway && <Row><Form.Text>This field is required</Form.Text></Row>}

          <Form.Label className={styles.label}>Rewards</Form.Label>
          <Row>
            <Col>
              <Button onClick={() => setValue("rewardType", "nearTokens", { shouldValidate: true })} className={`${getValues("rewardType") === "nearTokens" ? 'active' : ''}`}>Near Tokens</Button>
            </Col>
            <Col>
              <Button onClick={() => setValue("rewardType", "NFT", { shouldValidate: true })} className={`${getValues("rewardType") === "NFT" ? 'active' : ''}`}>NFT</Button>
            </Col>
          </Row>
          <Form.Control type="hidden" {...register("rewardType", { required: true })} />
          {errors.rewardType && <Row><Form.Text>This field is required</Form.Text></Row>}
          {RewardDropDown}
          {errors.reward && <Row><Form.Text>This field is required</Form.Text></Row>}

          <Form.Label className={styles.label}>Metrics for Winner</Form.Label>
          <Form.Select defaultValue="Choose.." {...register("metrics", { required: true })}>
            <option>Most Engaged</option>
            <option>Random</option>
          </Form.Select>
          {errors.metrics && <Row><Form.Text>This field is required</Form.Text></Row>}
          
          <Form.Label className={styles.label}>Number of Winners</Form.Label>
          <Form.Control type="number" min="1" max="100" defaultValue="" {...register("numberOfWinners", { required: true })} />
          {errors.numberOfWinners && <Row><Form.Text>This field is required</Form.Text></Row>}

          <Row className="w-100">

            <Col lg={6}>
              <Form.Label className={styles.label}>Start Date</Form.Label>
              <Form.Control type="date" defaultValue="" {...register("startDate", { required: true })} />
              {errors.startDate && <Row><Form.Text>This field is required</Form.Text></Row>}
            </Col>

            <Col lg={6}>
              <Form.Label className={styles.label}>End Date</Form.Label>
              <Form.Control type="date" defaultValue="" {...register("endDate", { required: true })} />
              {errors.endDate && <Row><Form.Text>This field is required</Form.Text></Row>}
            </Col>

          </Row>
          <Row>
            <Col className="d-flex justify-content-end align-items-center my-3">
              <Button type="submit">Start Campaign</Button>
            </Col>
          </Row>

        </Form>
      </Row>

    </AdminLayout>
  );
}

export default CreateCampaign;