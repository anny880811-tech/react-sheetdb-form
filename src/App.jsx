
function App() {

  return (
    <>
      <div className="form-container mt-5">
        <h2 className="title mt-3">問卷調查</h2>
        <div className="form-custom">
          <div>
            <label htmlFor="userName" className="label-custom mt-3">參加人數</label>
            <input type="text" className="input-custom" id="userName" />
            <label htmlFor="userName" className="label-custom mt-3">抵達峇里島時間</label>
            <input type="text" className="input-custom" id="userName" />
            <label htmlFor="userName" className="label-custom mt-3">離開峇里島時間</label>
            <input type="text" className="input-custom" id="userName" />
            <label htmlFor="userName" className="label-custom mt-3">是否有對任何食物過敏</label>
            <input type="text" className="input-custom" id="userName" />
            <label htmlFor="userName" className="label-custom mt-3">是否有其他特殊需求</label>
            <input type="text" className="input-custom" id="userName" />
            <label htmlFor="userName" className="label-custom mt-3">是否需要婚禮外的旅遊行程規畫</label>
            <input type="text" className="input-custom" id="userName" />
          </div>
          <button type="submit" className="btn btn-primary mt-3 btn-custom">送出表單</button>
        </div>
      </div>
    </>
  )
}

export default App
