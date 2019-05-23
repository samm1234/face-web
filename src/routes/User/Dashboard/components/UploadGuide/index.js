import React from 'react';
import styled from 'styled-components';
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  margin-bottom: 30px;

  background: #ECECEC;

  > div {
    flex: 1;

    margin: 10px;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;

    > div {
      margin: 10px;
    }
  }
`;

const Description = styled.div`
  word-break: keep-all;
`;

const GuideImg = styled.img`
  width: 100%;
`;

export default function UploadGuide() {
  return (
    <Wrapper>
      <Card cover={<GuideImg alt="올바른 요청" src="https://t1.daumcdn.net/cfile/tistory/193AD54D4E4C9A0412" />}>
        <Meta title="올바른 요청 예시" description={<Description>{'정면을 바라보는 사진이 측정 잘 돼요.'}</Description>} />
      </Card>
      <Card cover={<GuideImg alt="잘못된 요청1" src="http://cfile201.uf.daum.net/image/12486142511356E018403A" />}>
        <Meta title="잘못된 요청 예시" description={<Description>{'얼굴을 알아보기 힘든 사진은 측정이 어려워요.'}</Description>} />
      </Card>
      <Card cover={<GuideImg alt="잘못된 요청2" src="http://cfile229.uf.daum.net/image/172323504E82F2070A896C" />}>
        <Meta title="잘못된 요청 예시" description={<Description>{'각도가 돌아간 사진은 측정이 어려워요.'}</Description>} />
      </Card>
    </Wrapper>
  );
}
