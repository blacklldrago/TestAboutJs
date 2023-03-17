import { Add, Info, Send } from "@mui/icons-material";
import { Divider, IconButton, TextField } from "@mui/material";
import { Button, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { AxiosRequest } from "../../utils/axiosRequest";

const Quizes = () => {
  const [addModal, setAddModal] = useState(false);
  const [answerAddModal, setAnswerAddModal] = useState(false);
  const [questions, setQuistions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [infoModal, setInfoModal] = useState(false);
  const [id, setId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await AxiosRequest.post("questions", {
        title: e.target["title"].value,
        answers: [],
      });
      getQuestions();
      setAddModal(false);
    } catch (error) {}
  };

  const handleSubmitAnswer = async (e) => {
    e.preventDefault();
    try {
      console.log(e.target["title"]);
      console.log(e.target["correct"]);
      console.log(e.target["questionId"]);
      const { data } = await AxiosRequest.post("answers", {
        title: e.target["title"].value,
        correct: e.target["correct"].checked,
        questionId: e.target["questionId"].value,
      });
      getAnswers();
      setAnswerAddModal(false);
    } catch (error) {}
  };

  const getQuestions = async () => {
    try {
      const { data } = await AxiosRequest.get("questions");
      setQuistions(data);
    } catch (error) {}
  };
  const getAnswers = async () => {
    try {
      const { data } = await AxiosRequest.get("answers");
      setAnswers(data);
    } catch (error) {}
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Answers",
      dataIndex: "answers",
      key: "answers",
      render: (e, row) => {
        return (
          <IconButton
            color="primary"
            onClick={() => {
              setId(row.id);
              setInfoModal(true);
            }}
          >
            <Info />
          </IconButton>
        );
      },
    },
  ];

  const columnsAnswers = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Correct",
      dataIndex: "correct",
      key: "correct",
      render: (e) => {
        return <div>{e ? "Yes" : "No"}</div>;
      },
    },
    {
      title: "QuestionId",
      dataIndex: "questionId",
      key: "questionId",
    },
  ];

  useEffect(() => {
    getQuestions();
    getAnswers();
  }, []);

  return (
    
    <div>
      <h1 className="text-center text-3xl">Quizes</h1>
      <Divider />
      <h1 className="text-center text-3xl">Questions</h1>
      <Divider />
      <IconButton color="success" onClick={() => setAddModal(true)}>
        <Add />
      </IconButton>
      <Table dataSource={questions} columns={columns} />
      <Divider />
      <h1 className="text-center text-3xl">Answers</h1>
      <Divider />
      <IconButton color="success" onClick={() => setAnswerAddModal(true)}>
        <Add />
      </IconButton>
      <Table dataSource={answers} columns={columnsAnswers} />

      <Modal
        title="Question"
        open={addModal}
        onCancel={() => setAddModal(false)}
        footer={false}
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">title</label>
          <input className="border border-gray-500" name="title" />
          <IconButton type="submit" color="primary">
            <Send />
          </IconButton>
        </form>
      </Modal>
      <Modal
        title="Answers"
        open={answerAddModal}
        onCancel={() => setAnswerAddModal(false)}
        footer={false}
      >
        <form
          onSubmit={handleSubmitAnswer}
          className="flex flex-col items-center gap-3"
        >
          <label htmlFor="title">title</label>
          <input className="border border-gray-500" name="title" />
          <label htmlFor="correct">Correct</label>
          <input type="checkbox" name="correct" />
          <select name="questionId">
            <option value={""}>Выберите вопрос</option>
            {questions.map((elem) => {
              return (
                <option value={elem.id} key={elem.id}>
                  {elem.title}
                </option>
              );
            })}
          </select>
          <IconButton type="submit" color="primary">
            <Send />
          </IconButton>
        </form>
      </Modal>
      <Modal open={infoModal} onCancel={() => setInfoModal(false)}>
        <ul>
          {answers
            .filter((elem) => elem.questionId == id)
            .map((elem) => {
              console.log(elem);
              return <li>{elem.title}</li>;
            })}
        </ul>
      </Modal>
    </div>
  );
};

export default Quizes;
