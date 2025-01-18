import styled from 'styled-components';
import Header from './Header';
// import recomData from './mock/RecomMock.json'; // JSON 데이터 import
import { useLocation } from 'react-router-dom';

function RecomResult() {
//   const data = recomData[0];
 const location = useLocation();
 const data = location?.state.data;
 console.log(data);

  

  return (
    <div>
      <Header />
      <Container>
        <Content>
          <Text>추천 지역은</Text>
          <Title>{data.ruralName}</Title>
          <ImageBox>
            <Image src={data.ruralThumbnailUrl} alt={data.ruralName} />
          </ImageBox>
          <Scores>
            {data.score.map((item, index) => (
              <ScoreBox key={index}>
                <Circle>{item.score}점</Circle>
                <ScoreText>{item.name}</ScoreText>
              </ScoreBox>
            ))}
          </Scores>
          <Box>
            <Row><Costs><Element>평균 주거비</Element> {data.housingCost}만 원</Costs></Row>
            <Row><Costs><Element>교통비</Element> {data.transportationCost}만 원</Costs></Row>
            <Row><Costs><Element>식비 </Element>{data.foodCost}만 원</Costs></Row>
            <Result>서울 생활 대비 얼마얼마 절약 가능!</Result>
          </Box>
          <Description>{data.ruralDescription}</Description>
          <StyledLink
            href={data.ruralUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.ruralName} 귀촌 관련 페이지 바로 가기
          </StyledLink>
        </Content>
      </Container>
    </div>
  );
}

export default RecomResult;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageBox = styled.div`
  width: 15rem;
  height: 15rem;
`;

const Image = styled.img`
  width: 15rem;
  height: auto;
`;

const Text = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #464646;
`;

const Title = styled.div`
  margin: 1.5rem 0;
  font-size: 32px;
  color: #4E6453;
  font-weight: bold;
`;

const Scores = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 3.5rem;
`;

const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const Circle = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: #A9BBAD;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

const ScoreText = styled.div`
  color: #5E5E5E;
  font-size: 18px;
  font-weight: 600;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
`;

const Costs = styled.div`
  font-size: 20px;
  color: #595959;
  font-weight: 500;
`;

const Result = styled.div`
  margin-top: 2rem;
  color: #4e6453;
  font-size: 24px;
  font-weight: bold;
`;

const Description = styled.div`
  width: 25rem;
  text-align: center;
  margin-top: 2rem;
  font-size: 18px;
`;

const StyledLink = styled.a`
  margin-top: 2rem;
  color: #595959;
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;

  &:hover {
    color: #6a856f;
  }
`;

const Element = styled.span`
  width: 7rem;
  display: inline-block;
  text-align: right;
  margin-right: 1rem;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
