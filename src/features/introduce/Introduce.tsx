const Introduce = () => {
  return (
    <>
      <div className="hero-content">
        <div className="section-index reveal" style={{ marginBottom: '4vh' }}>00/</div>
        <h1 className="reveal delay-1">
          <span style={{ 
            display: 'block', 
            fontStyle: 'italic',
            transform: 'skewX(-15deg)',
            transformOrigin: 'bottom left',
            paddingBottom: '0.1em' 
          }}>&nbsp;&nbsp;&nbsp;DEVELOPER</span>
          <span style={{ display: 'block', fontStyle: 'italic' }}>KANGHYUN</span>
        </h1>
      </div>
      <div className="hero-philosophy reveal delay-2" style={{ wordBreak: 'keep-all', maxWidth: '600px', lineHeight: 1.6 }}>
        사용자의 상상을 코드로 그려내고 <br />
        기술을 통해 사용자에게 즐거움과 가치를 제공하고자 합니다.
      </div>
    </>
  );
};

export default Introduce;

