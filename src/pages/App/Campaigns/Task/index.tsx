import React, { useState } from 'react'
import { styled } from 'styled-components'
import { Button, ConfigProvider, Form, Input, Modal, Radio } from 'antd';

const defaultData = {
  borderRadius: 6,
  colorPrimary: '#1677ff',
  colorText: "black",
  // Button: {
  //   colorPrimary: '#050b0c',
  // },
  colorBgContainer: "unset",
};

export const Task = (props) => {
  const descUrl = new URL('./1.jpg', import.meta.url).href
  const submissionUrl = new URL('./2.jpg', import.meta.url).href

  const [data, setData] = React.useState(defaultData);

  const [open, setOpen] = useState(false);


  const handleSubmission = () => {
    setOpen(true);
  }

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };

  return(
    <Container>
       <ConfigProvider
        theme={{
          token: {
            ...data,
          },
          components: {
            Button: {
              // colorPrimary: data.Button?.colorPrimary,
            },
          },
        }}
      >
      
        <TaskDescription src={descUrl}/>
        <Submission src={submissionUrl} onClick={handleSubmission}/>
        <CollectionCreateForm
          open={open}
          onCreate={onCreate}
          onCancel={() => {
            setOpen(false);
          }}
        />
        </ConfigProvider>
    </Container>
   )
}

const CollectionCreateForm = ({
  open,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Submission"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
      >
        <Form.Item
          name="title"
          label="Contract address"
          rules={[{ required: true, message: 'Please input the contract address' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Video link">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const TaskDescription = styled.img`
  width: 70%;
  margin: 0 auto;
`
const Submission = styled.img`
  width: 70%;
  margin: 0 auto;
`

const Container = styled.div`
  display: flex;
  flex-flow: column;
  overflow: scroll;
`
