function DisplayResult(props) {
  const monster = props.monster;
  console.log(monster);
  return <h1>{monster.name}</h1>;
}
export default DisplayResult;
