import _ from "lodash";
// su dung lodash vi data truyen sang co the rong
const Question = (props) => {
  const { data, index } = props;

  if (_.isEmpty(data)) {
  }
  return (
    <>
      {data.image && (
        <div className="q-image">
          <img src={`data:image/jpeg;base64,${data.image}`} />
        </div>
      )}

      <div className="question">
        {" "}
        Question {index + 1} : {data.questionDes} ?
      </div>
      <div className="answer">
        {data.answers &&
          data.answers.length > 0 &&
          data.answers.map((a, index) => {
            return (
              <div key={`answer-${index}`} className="a-child">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    // id map voi for ben duoi,
                    // moi khi click label thi o input dc check
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    {a.description}
                  </label>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Question;
