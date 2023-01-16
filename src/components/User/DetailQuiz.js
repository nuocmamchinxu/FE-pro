import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiServices";
import _ from "lodash";
import "./DetailQuiz.scss";
import Question from "./Question";
import { useState } from "react";
const DetailQuiz = () => {
  const params = useParams();
  const location = useLocation();

  const quizId = params.id;

  const [dataQuiz, setDataQuiz] = useState([]);
  const [currentQues, setCurrentQues] = useState(0);
  // mac dinh gia tri khoi tao index =0

  useEffect(() => {
    fetchQuesions();
  }, [quizId]);
  //    truyen tham so dependency la quizId thi moi lan quizId thay doi thi ham useEffect duoc chay
  const fetchQuesions = async () => {
    let res = await getDataQuiz(quizId);
    if (res && res.EC === 0) {
      let raw = res.DT;
      console.log("raw", raw);
      let data = _.chain(raw)

        // nhóm  các thành phần của mảng theo id property
        .groupBy("id")

        // key là nhóm tên (id) , value là mảng của đối tượng
        .map((value, key) => {
          let answers = [];
          let questionDes,
            image = null;
          value.forEach((item, index) => {
            if (index === 0) {
              questionDes = item.description;
              image = item.image;
            }
            answers.push(item.answers);
          });

          return { questionId: key, answers: answers, questionDes, image };
        })
        //    cu phap viet 1 function day du
        // ham map truyen vao func, ban chat day la 1 doan return
        // o day moi 1 lan lap se tra ra cuc object sau return, khi them {} thi no se hieu la them 1 function day du
        .value();
      console.log("check datta", data);
      setDataQuiz(data);
    }
  };
  console.log("checkdataQuiz", dataQuiz);
  const handleBack = () => {
    if (dataQuiz - 1 > 0) return;
    setCurrentQues(currentQues - 1);
  };
  const handleNext = () => {
    if (dataQuiz && dataQuiz.length > currentQues + 1) {
      setCurrentQues(currentQues + 1);
    }
  };
  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <div className="title">
          Quiz {quizId} : {location?.state?.quizTitle}
        </div>
        <hr />
        <div>
          <img />
        </div>
        <div className="q-content">
          <Question
            index={currentQues}
            data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[currentQues] : []}
            // Neu ton tai dataQuiz va chieu dai > 0 thi moi set tham so dataquiz, neu ko thi = rong.
            // vi lan dau render ta dat cho dataQuiz = []
          />
        </div>
        <div className="footer">
          <button className="btn btn-secondary" onClick={() => handleBack()}>
            back
          </button>
          <button className="btn btn-primary" onClick={() => handleNext()}>
            next
          </button>
        </div>
      </div>
      <div className="right-content">
        count down
        <div>ss</div>
      </div>
    </div>
  );
};
export default DetailQuiz;
