import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import { UpdateNumber } from "../../store/count";
// import { useFilter } from "../../hooks/useFilter";
import { useDispatch, useSelector } from "react-redux";
import { useFilter } from "../../hooks/useFilter";
import { useInput } from "../../hooks/useInput";

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 293px);
  overflow: scroll;
  padding-top:29px;
  background-color: #f8f8f9;
`;

const ContentArticle = styled.div`
  /* grid-area: content; */
  /* width: 700px; */
  h3 {
    text-align: center;
  }
`;

const ListJob = styled.ul`
  margin-top: 17px;
  padding-bottom: 48px;
  li {
    position: relative;
    align-items: center;
    height: 86px;
    padding: 18px 0;
    box-shadow: -1px 2px 5px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    & + li {
      margin-top: 7px;
    }
  }
  img {
    display: block;
    margin: 0 auto;
  }
`;

const CardBoxPage = () => {
  const [res, setRes] = useState(null)
  const data = useSelector((state) => state);
  const [filteredData] = useFilter();
  const [isSearching] = useInput();

  useEffect(() => {
    console.log(filteredData);
    console.log(data);
  }, [filteredData]);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(UpdateNumber(filteredData.length));
  //   console.log("렌더링");
  // }, []);

  return (
    <main className="doc-main">
      <section className="inner-main">
        <h2 className="screen_out">채용 데모 페이지 본문</h2>
        <MainContent>
          <ContentArticle>
            <h3>
              채용 목록
              <span style={{ color: "#999" }}> 2024-12-18 업데이트 완료</span>
            </h3>
            <ListJob>
              {data.cardData.status === "fail" ? (
                <span style={{ color: "red", fontSize: "18px" }}>
                  통신과정에서 에러가 발생하였습니다.
                </span>
              ) : (
                filteredData?.map((value, index) => {
                  return <Card key={index} item={value} />;
                })
                // <span>검색중..</span>
              )}
            </ListJob>
          </ContentArticle>
        </MainContent>
      </section>
    </main>
  );
};

export default CardBoxPage;
