import { Loading, QuarterIcon, TqIcon } from "./styles";

const LoadingScreen = () => {
  return (
    <Loading>
      <TqIcon origin={0} size={5} color="var(--green-black)" duration={2000} reverse="true"/>
      <QuarterIcon origin={45} size={7.5} color="var(--success)" duration={800}/>
      <QuarterIcon origin={235} size={7.5} color="var(--color-negative)" duration={800}/>
      <TqIcon origin={180} size={10} color="var(--dark-blue)" duration={3000} />
      <QuarterIcon origin={135} size={12.5} color="var(--ligth-green)" duration={2500} reverse="true"/>
      <QuarterIcon origin={315} size={12.5} color="var(--ligth-blue)" duration={2500} reverse="true"/>
      <h1>Carregando...</h1>
    </Loading>
  );
}

export default LoadingScreen;