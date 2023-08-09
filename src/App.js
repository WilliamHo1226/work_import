import React, { useState } from 'react';

function App() {
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [workGroup, setWorkGroup] = useState('');
  const [workArea, setWorkArea] = useState('');
  const [workContent, setWorkContent] = useState('');
  const [startPhoto, setStartPhoto] = useState(null);
  const [workCompleted, setWorkCompleted] = useState(false);
  const [endPhoto, setEndPhoto] = useState(null);

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div>
      <h1>工作內容填寫 / Nội dung công việc</h1>
      <form onSubmit={handleSubmit}>
        <div><label>日期 / Ngày：<input type="text" value={currentDate} readOnly /></label></div>
        <div><label>時間 / Thời gian：<input type="text" value={currentTime} readOnly /></label></div>
        <div><label>員工編號 / Số nhân viên：<input type="text" value={employeeNumber} onChange={(e) => setEmployeeNumber(e.target.value)} /></label></div>
        <div><label>工作組別 / Nhóm làm việc：<input type="text" value={workGroup} onChange={(e) => setWorkGroup(e.target.value)} /></label></div>
        <div><label>工作區域 / Khu vực：<input type="text" value={workArea} onChange={(e) => setWorkArea(e.target.value)} /></label></div>
        <div><label>工作內容 / Nội dung công việc：<textarea name="work-content" value={workContent} onChange={(e) => setWorkContent(e.target.value)} /></label></div>
        <div><label>開始前照片 / Hình ảnh trước khi bắt đầu：<input type="file" onChange={(e) => setStartPhoto(e.target.files[0])} /></label></div>
        <div><label>工作完成 / Công việc đã hoàn thành：<input type="checkbox" checked={workCompleted} onChange={() => setWorkCompleted(!workCompleted)} /></label></div>
        <div><label>完成後照片 / Hình ảnh sau khi hoàn thành：<input type="file" onChange={(e) => setEndPhoto(e.target.files[0])} /></label></div>
        <div><button type="submit">提交 / Gửi</button></div>
      </form>
    </div>
  );
}

export default App;
