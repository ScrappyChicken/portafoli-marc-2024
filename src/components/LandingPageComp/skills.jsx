import "./skills.css"; 

const skillsData = [
  { width: "71%", animation: "skill_1 0.6s ease", name:"SAD"},
  { width: "90%", animation: "skill_2 0.6s ease", name:"ASGBD" },
  { width: "50%", animation: "skill_3 0.6s ease", name:"SXI" },
  { width: "60%", animation: "skill_4 0.6s ease", name:"IAW" },
  { width: "70%", animation: "skill_5 0.6s ease", name:"ASO" },
  { width: "105%", animation: "skill_6 5.0s ease", name:"ChatGPT" },
];

const SkillBar = ({ width, animation, name }) => {
  return (
    <>
    <div>{name}</div>
    <div className="skill-bar-wrapper">
        
      <div className="skill-bar-background"></div>
      <div
        className="skill-bar-foreground"
        style={{ width, animation }}
      ></div>
    </div>
    </>
  );
};

const Skills = () => {
  return (
    <div className="skills-container">
      {skillsData.map((skill, index) => (
        <SkillBar key={index} width={skill.width} animation={skill.animation} name={skill.name} />
      ))}
    </div>
  );
};

export default Skills;
