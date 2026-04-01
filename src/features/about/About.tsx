

const About = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
      <div className="reveal">
        <span className="kicker">02 / Philosophy</span>
        <h2 style={{ marginBottom: '4vh' }}>Engineering Mindset</h2>
      </div>
      
      <div className="reveal delay-1" style={{ maxWidth: '800px' }}>
        <p className="body-large" style={{ fontSize: '1.8rem', lineHeight: 1.5, marginBottom: '4vh', wordBreak: 'keep-all', color: 'var(--text-primary)', fontWeight: 350, opacity: 0.9 }}>
          "빠른 속도로 발전하는 새로운 기술 동향 파악과 기술 학습을 두려워하지 않으며, <br />
          새로운 기술을 활용하여 성능 최적화와 사용자 경험 향상에 적극적으로 접목합니다."
        </p>
        <p className="body-large serif" style={{ fontSize: '1.4rem', wordBreak: 'keep-all', color: 'var(--text-primary)', fontWeight: 350, opacity: 0.9 }}>
          픽셀 단위의 작은 차이까지 신경 쓰는 꼼꼼함으로 <br />
          디테일은 높은 완성도를 만듭니다.
        </p>
      </div>
    </div>
  );
};

export default About;

