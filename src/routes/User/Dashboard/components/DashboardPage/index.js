import React, { Fragement } from 'react';
import styled from 'styled-components';
import { Upload, Icon, message } from 'antd';
import axios from 'axios';

import UploadGuide from '../UploadGuide';
import HistoryTable from '../HistoryTable';

const requestUrl = 'https://skb89qsem5.execute-api.ap-northeast-2.amazonaws.com/dev/test/image';
const dummyBase64 = '"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"';

const dummyData = {
  currentData: {
    date: "2019.05.23",
    jaw: 2.891,
    nose: 25.463,
  },
  histories: [
    {
      date: "2019.05.10",
      jaw: 2.791,
      nose: 23.463,
    },
    {
      date: "2019.05.01",
      jaw: 2.873,
      nose: 24.463,
    },
    {
      date: "2019.05.01",
      jaw: 2.873,
      nose: 24.463,
    },
    {
      date: "2019.05.01",
      jaw: 2.873,
      nose: 24.463,
    },
    {
      date: "2019.05.01",
      jaw: 2.873,
      nose: 24.463,
    },
    {
      date: "2019.05.01",
      jaw: 2.873,
      nose: 24.463,
    },
    {
      date: "2019.05.01",
      jaw: 2.873,
      nose: 24.463,
    },
    {
      date: "2019.05.01",
      jaw: 2.873,
      nose: 24.463,
    },
    
  ],
};

function generateHistoryTableData(data) {
  const initialData = Object.keys(data.currentData).length > 0 ? [{ key: 0, ...data.currentData }] : [];

  return data.histories.reduce((acc, history, index) => {
    acc.push({
      key: index + 1,
      ...history,
    });

    return acc;
  }, initialData);
}


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  /*
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  */
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return /* isJPG && */ isLt2M;
}

const Wrapper = styled.div`
`;

export default class DashboardPage extends React.PureComponent {
  state = {
    pristine: true,
    loading: false,
    error: false,
    data: {
      currentData: {},
      histories: [],
    },
  };

  uploadStart = base64 => {
    axios.post(requestUrl, dummyBase64)// , `"${base64.split(',')[1]}"`)
      .then(response => {
        this.setState({
          loading: false,
          data: response.data,
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: true,
          data: dummyData,
        });
        console.log(error);
      });
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ pristine: false, loading: true, error: false });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, base64 => this.uploadStart(base64));
    }
  }

  render() {
    const {
      data,
      pristine,
      loading,
      error,
    } = this.state;

    const dataSource = generateHistoryTableData(data);

    return (
      <Wrapper>
        <UploadGuide />
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          onChange={this.handleChange}
        >
          <div>
            <Icon type={loading ? 'loading' : 'plus'} />
            <div className="ant-upload-text">검사하기</div>
          </div>
        </Upload>
        <HistoryTable dataSource={dataSource} loading={loading} />
      </Wrapper>
    );
  }
}
